import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

function parseArgs(argv) {
  const args = {
    projectRoot: process.cwd(),
    queries: "",
    queue: "",
    take: 5,
    limit: 12,
    waitMs: 1200,
    headless: true,
    keepIntermediate: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];

    if (token === "--project-root" && next) {
      args.projectRoot = path.resolve(next);
      i += 1;
      continue;
    }
    if (token === "--queries" && next) {
      args.queries = path.resolve(next);
      i += 1;
      continue;
    }
    if (token === "--queue" && next) {
      args.queue = path.resolve(next);
      i += 1;
      continue;
    }
    if (token === "--take" && next) {
      args.take = Number.parseInt(next, 10) || args.take;
      i += 1;
      continue;
    }
    if (token === "--limit" && next) {
      args.limit = Number.parseInt(next, 10) || args.limit;
      i += 1;
      continue;
    }
    if (token === "--wait-ms" && next) {
      args.waitMs = Number.parseInt(next, 10) || args.waitMs;
      i += 1;
      continue;
    }
    if (token === "--headed") {
      args.headless = false;
      continue;
    }
    if (token === "--keep-intermediate") {
      args.keepIntermediate = true;
      continue;
    }
  }

  if (!args.queries && !args.queue) {
    throw new Error("Missing required --queries or --queue value.");
  }

  return args;
}

async function resolveQuerySource(args, tempDir) {
  if (args.queries) {
    const raw = await fs.readFile(args.queries, "utf8");
    const queries = raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    return {
      queryFile: args.queries,
      queries,
      queuePath: "",
      remainingQueueText: "",
    };
  }

  const raw = await fs.readFile(args.queue, "utf8");
  const lines = raw.split(/\r?\n/);
  const queries = [];
  let consumed = 0;

  for (const line of lines) {
    if (queries.length >= args.take) {
      break;
    }
    if (!line.trim()) {
      consumed += 1;
      continue;
    }
    queries.push(line.trim());
    consumed += 1;
  }

  if (queries.length === 0) {
    throw new Error("Queue is empty.");
  }

  const queryFile = path.join(tempDir, `lead-collect-score-queue-${Date.now()}.txt`);
  await fs.writeFile(queryFile, `${queries.join("\n")}\n`, "utf8");

  return {
    queryFile,
    queries,
    queuePath: args.queue,
    remainingQueueText: lines.slice(consumed).join("\n").replace(/\s+$/, ""),
  };
}

function runNode(scriptPath, scriptArgs, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [scriptPath, ...scriptArgs], {
      cwd,
      stdio: "inherit",
    });
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Command failed: ${scriptPath} (${code ?? "unknown"})`));
    });
  });
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        current += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        current += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
      continue;
    }
    if (char === ",") {
      row.push(current);
      current = "";
      continue;
    }
    if (char === "\n") {
      row.push(current.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      current = "";
      continue;
    }
    current += char;
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current.replace(/\r$/, ""));
    rows.push(row);
  }

  if (rows.length === 0) {
    return [];
  }

  const headers = rows[0];
  return rows.slice(1).filter((line) => line.some((cell) => cell !== "")).map((line) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = line[index] ?? "";
    });
    return obj;
  });
}

function toCsv(rows, headers) {
  const escape = (value) => {
    const text = value == null ? "" : String(value);
    return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };

  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(headers.map((header) => escape(row[header] ?? "")).join(","));
  }
  return `${lines.join("\n")}\n`;
}

function extractRegion(query) {
  const parts = query.trim().split(/\s+/);
  if (parts.length < 3) {
    return query.trim();
  }
  const prefecture = parts.at(-1);
  const area = parts.slice(1, -1).join(" ");
  return `${prefecture} ${area}`.trim();
}

function extractAddress(rawLines, region) {
  const compactRegion = region.replace(/^北海道\s*/, "北海道");
  const parts = String(rawLines || "")
    .split(" | ")
    .map((part) => part.trim())
    .filter(Boolean);

  for (const part of parts) {
    if (!/[0-9０-９一-龠ぁ-んァ-ヶ].*(丁目|条|町|番|号|−|-)/.test(part)) {
      continue;
    }
    if (/営業時間|営業開始|営業終了|クチコミ|ウェブサイト|ルート・乗換/.test(part)) {
      continue;
    }
    const cleaned = part.includes("·") ? part.split("·").at(-1).trim() : part;
    return `${compactRegion}${cleaned}`;
  }

  return "";
}

function normalizeCompanyName(name) {
  return String(name || "")
    .replace(/（.*?）|\(.*?\)/g, "")
    .replace(/株式会社|有限会社|合名会社|合資会社|合同会社|㈱|㈲/g, "")
    .replace(/(展示場|モデルハウス|ショールーム|営業所|事務所|支店|本店|会場|店).*$/g, "")
    .replace(/\s+/g, "")
    .trim();
}

function getRootDomain(input) {
  try {
    const { hostname } = new URL(input);
    const parts = hostname.split(".").filter(Boolean);
    if (parts.length <= 2) {
      return hostname;
    }

    const secondLevelJp = new Set(["co", "or", "ne", "ac", "go", "ed", "gr", "lg"]);
    const last = parts.at(-1);
    const secondLast = parts.at(-2);
    if (last === "jp" && secondLevelJp.has(secondLast)) {
      return parts.slice(-3).join(".");
    }

    return parts.slice(-2).join(".");
  } catch {
    return "";
  }
}

function canonicalWebsiteKey(input) {
  try {
    const url = new URL(input);
    url.hash = "";
    for (const key of Array.from(url.searchParams.keys())) {
      if (/^utm_/i.test(key) || /^(gclid|fbclid|yclid)$/i.test(key)) {
        url.searchParams.delete(key);
      }
    }
    return `${getRootDomain(url.toString())}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return input;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const projectRoot = args.projectRoot;
  const stamp = `${Date.now()}`;
  const tempDir = path.join(projectRoot, "tmp");
  const mapsOut = path.join(tempDir, `lead-collect-score-${stamp}.json`);
  const contactOut = path.join(tempDir, `lead-collect-score-${stamp}.csv`);
  const masterPath = path.join(projectRoot, "data", "sales-leads-master.csv");

  await fs.mkdir(tempDir, { recursive: true });
  const querySource = await resolveQuerySource(args, tempDir);

  await runNode(
    path.join(projectRoot, "scripts", "google-maps-batch.mjs"),
    ["--queries", querySource.queryFile, "--out", mapsOut, "--limit", String(args.limit), "--wait-ms", String(args.waitMs), ...(args.headless ? [] : ["--headed"])],
    projectRoot,
  );

  await runNode(
    path.join(projectRoot, "scripts", "analyze-contact-availability.mjs"),
    ["--in", mapsOut, "--out", contactOut],
    projectRoot,
  );

  const rawRows = JSON.parse(await fs.readFile(mapsOut, "utf8"));
  const contactRows = parseCsv(await fs.readFile(contactOut, "utf8"));
  const contactByName = new Map(contactRows.map((row) => [row.name, row]));
  const masterRows = parseCsv((await fs.readFile(masterPath, "utf8")).replace(/^\uFEFF/, ""));
  const existingCompanySiteKeys = new Set(
    masterRows
      .filter((row) => row.website)
      .map((row) => `${normalizeCompanyName(row.company_name)}|${getRootDomain(row.website)}`),
  );
  const existingCanonicalUrls = new Set(masterRows.map((row) => canonicalWebsiteKey(row.website)).filter(Boolean));
  const seenCompanySiteKeys = new Set();
  const seenCanonicalUrls = new Set();
  const candidates = [];

  for (const rawRow of rawRows) {
    const contact = contactByName.get(rawRow.name);
    if (!contact) {
      continue;
    }
    if (contact.has_site !== "1") {
      continue;
    }
    if (!(contact.has_email === "1" || contact.has_form === "1")) {
      continue;
    }
    if (!rawRow.website) {
      continue;
    }
    const normalizedCompany = normalizeCompanyName(rawRow.name);
    const rootDomain = getRootDomain(rawRow.website);
    const companySiteKey = `${normalizedCompany}|${rootDomain}`;
    const canonicalUrl = canonicalWebsiteKey(rawRow.website);

    if (existingCompanySiteKeys.has(companySiteKey) || seenCompanySiteKeys.has(companySiteKey)) {
      continue;
    }
    if (existingCanonicalUrls.has(canonicalUrl) || seenCanonicalUrls.has(canonicalUrl)) {
      continue;
    }

    seenCompanySiteKeys.add(companySiteKey);
    seenCanonicalUrls.add(canonicalUrl);
    const region = extractRegion(rawRow.query);
    const baseNotes = [contact.notes, "needs_visual_review=1"].filter(Boolean).join(";");
    candidates.push({
      company_name: rawRow.name,
      industry: "工務店",
      region,
      address: extractAddress(rawRow.raw_lines, region),
      phone: rawRow.phone || "",
      website: rawRow.website,
      has_email: contact.has_email,
      has_form: contact.has_form,
      notes: baseNotes,
      score: "",
      decision: "",
      status: "new",
      selection_reason: "",
      final_url: rawRow.website,
      root_domain: rootDomain,
      normalized_company_name: normalizedCompany,
      review_required: true,
    });
  }

  if (querySource.queuePath) {
    const nextText = querySource.remainingQueueText ? `${querySource.remainingQueueText}\n` : "";
    await fs.writeFile(querySource.queuePath, nextText, "utf8");
  }

  if (!args.keepIntermediate) {
    await Promise.allSettled([fs.unlink(mapsOut), fs.unlink(contactOut), fs.unlink(querySource.queryFile)]);
  }

  process.stdout.write(
    `${JSON.stringify(
      {
        queries: querySource.queries,
        count: candidates.length,
        rows: candidates,
      },
      null,
      2,
    )}\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
