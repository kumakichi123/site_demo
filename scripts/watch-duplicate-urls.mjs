import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const csvPath = path.resolve(rootDir, "data", "sales-leads-master.csv");
const artifactsDir = path.resolve(rootDir, "artifacts");
const alertPath = path.resolve(artifactsDir, "duplicate-url-alert.txt");
const statusPath = path.resolve(artifactsDir, "duplicate-url-alert.json");

fs.mkdirSync(artifactsDir, { recursive: true });

let timer = null;

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function normalizeUrl(value) {
  const trimmed = (value || "").trim();
  if (!trimmed) return "";

  try {
    const url = new URL(trimmed);
    url.hash = "";
    return url.toString().toLowerCase().replace(/\/+$/, "");
  } catch {
    return trimmed.toLowerCase().replace(/\/+$/, "");
  }
}

function findDuplicates() {
  const raw = fs.readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
  const [header, ...body] = parseCsv(raw);
  const websiteIndex = header.indexOf("website");
  const companyIndex = header.indexOf("company_name");
  const idIndex = header.indexOf("id");

  if (websiteIndex === -1 || companyIndex === -1 || idIndex === -1) {
    throw new Error("CSV is missing required columns: id, company_name, website");
  }

  const seen = new Map();
  const duplicates = new Map();

  for (const row of body) {
    const website = normalizeUrl(row[websiteIndex]);
    if (!website) continue;

    const item = {
      id: row[idIndex],
      company_name: row[companyIndex],
      website: row[websiteIndex],
    };

    if (!seen.has(website)) {
      seen.set(website, item);
      continue;
    }

    if (!duplicates.has(website)) {
      duplicates.set(website, [seen.get(website)]);
    }
    duplicates.get(website).push(item);
  }

  return duplicates;
}

function writeStatus(ok, output) {
  const payload = {
    ok,
    checkedAt: new Date().toISOString(),
    file: csvPath,
    output,
  };
  fs.writeFileSync(statusPath, JSON.stringify(payload, null, 2), "utf8");
  fs.writeFileSync(alertPath, output.trim() ? `${output.trim()}\n` : "", "utf8");
}

function runCheck(reason) {
  const header = `[${new Date().toISOString()}] duplicate URL check triggered: ${reason}`;
  try {
    const duplicates = findDuplicates();
    if (duplicates.size === 0) {
      const message = `${header}\nNo duplicate website URLs found.`;
      writeStatus(true, message);
      console.log(message);
      return;
    }

    const lines = [header, "Duplicate website URLs found:"];
    for (const [website, items] of duplicates.entries()) {
      lines.push(`- ${website}`);
      for (const item of items) {
        lines.push(`  - id=${item.id} company=${item.company_name} raw=${item.website}`);
      }
    }

    const message = lines.join("\n");
    writeStatus(false, message);
    console.error(message);
    return;
  } catch (error) {
    const message = `${header}\n${error instanceof Error ? error.message : String(error)}`;
    writeStatus(false, message);
    console.error(message);
  }
}

function scheduleCheck(reason) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => runCheck(reason), 400);
}

if (!fs.existsSync(csvPath)) {
  console.error(`Missing CSV: ${csvPath}`);
  process.exit(1);
}

runCheck("startup");
fs.watch(csvPath, () => scheduleCheck("csv-updated"));
console.log(`Watching ${csvPath}`);
