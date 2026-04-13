import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

function parseArgs(argv) {
  const args = {
    queries: "",
    out: "",
    limit: 50,
    waitMs: 1500,
    headless: true,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];

    if (token === "--queries" && next) {
      args.queries = next;
      i += 1;
      continue;
    }

    if (token === "--out" && next) {
      args.out = next;
      i += 1;
      continue;
    }

    if (token === "--limit" && next) {
      args.limit = Number.parseInt(next, 10) || 50;
      i += 1;
      continue;
    }

    if (token === "--wait-ms" && next) {
      args.waitMs = Number.parseInt(next, 10) || 1500;
      i += 1;
      continue;
    }

    if (token === "--headed") {
      args.headless = false;
    }
  }

  if (!args.queries || !args.out) {
    throw new Error("Missing required --queries or --out value.");
  }

  return args;
}

async function readQueries(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function runScraper({ query, limit, waitMs, headless, out }) {
  return new Promise((resolve, reject) => {
    const args = [
      "scripts/google-maps-scraper.mjs",
      "--query",
      query,
      "--limit",
      String(limit),
      "--wait-ms",
      String(waitMs),
      "--out",
      out,
    ];

    if (!headless) {
      args.push("--headed");
    }

    const child = spawn(process.execPath, args, {
      stdio: "inherit",
      cwd: process.cwd(),
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Scraper failed for query "${query}" with exit code ${code}.`));
    });
  });
}

function dedupeRows(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = [row.name, row.address, row.phone].join("|");
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const queries = await readQueries(args.queries);
  const tempDir = path.join(process.cwd(), "data", "maps", "_batch");
  await fs.mkdir(tempDir, { recursive: true });

  const merged = [];

  for (let i = 0; i < queries.length; i += 1) {
    const query = queries[i];
    const tempOut = path.join(tempDir, `batch-${i + 1}.json`);
    await runScraper({
      query,
      limit: args.limit,
      waitMs: args.waitMs,
      headless: args.headless,
      out: tempOut,
    });

    const rows = JSON.parse(await fs.readFile(tempOut, "utf8"));
    merged.push(...rows);
  }

  const uniqueRows = dedupeRows(merged);
  await fs.mkdir(path.dirname(args.out), { recursive: true });
  await fs.writeFile(args.out, JSON.stringify(uniqueRows, null, 2), "utf8");
  process.stdout.write(`${JSON.stringify({ queries: queries.length, count: uniqueRows.length, out: args.out }, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
