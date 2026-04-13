import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const DEFAULT_LIMIT = 50;
const DEFAULT_WAIT_MS = 1500;

function parseArgs(argv) {
  const args = {
    query: "",
    limit: DEFAULT_LIMIT,
    out: "",
    headless: true,
    waitMs: DEFAULT_WAIT_MS,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];

    if (token === "--query" && next) {
      args.query = next;
      i += 1;
      continue;
    }

    if (token === "--limit" && next) {
      args.limit = Number.parseInt(next, 10) || DEFAULT_LIMIT;
      i += 1;
      continue;
    }

    if (token === "--out" && next) {
      args.out = next;
      i += 1;
      continue;
    }

    if (token === "--wait-ms" && next) {
      args.waitMs = Number.parseInt(next, 10) || DEFAULT_WAIT_MS;
      i += 1;
      continue;
    }

    if (token === "--headed") {
      args.headless = false;
    }
  }

  if (!args.query) {
    throw new Error("Missing required --query value.");
  }

  return args;
}

function toCsv(rows) {
  if (rows.length === 0) {
    return "";
  }

  const headers = Object.keys(rows[0]);
  const escape = (value) => {
    const text = value == null ? "" : String(value);
    if (/[",\n]/.test(text)) {
      return `"${text.replaceAll('"', '""')}"`;
    }
    return text;
  };

  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(headers.map((header) => escape(row[header])).join(","));
  }
  return `${lines.join("\n")}\n`;
}

async function ensureDir(filePath) {
  if (!filePath) {
    return;
  }
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function writeOutputs(outPath, rows) {
  if (!outPath) {
    return;
  }

  await ensureDir(outPath);

  const ext = path.extname(outPath).toLowerCase();
  if (ext === ".csv") {
    await fs.writeFile(outPath, toCsv(rows), "utf8");
    return;
  }

  await fs.writeFile(outPath, JSON.stringify(rows, null, 2), "utf8");
}

async function autoScroll(listLocator, targetCount, waitMs) {
  let previousCount = 0;
  let stableRounds = 0;

  while (stableRounds < 4) {
    const cards = listLocator.locator('[role="article"]');
    const count = await cards.count();
    if (count >= targetCount) {
      return;
    }

    await listLocator.evaluate((node) => {
      node.scrollBy(0, node.scrollHeight);
    });
    await listLocator.page().waitForTimeout(waitMs);

    const nextCount = await cards.count();
    if (nextCount === previousCount) {
      stableRounds += 1;
    } else {
      stableRounds = 0;
      previousCount = nextCount;
    }
  }
}

async function extractListing(card) {
  return card.evaluate((node) => {
    const text = node.innerText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const phoneRegex = /(?:\+81[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{3,4}|0\d{1,4}-\d{1,4}-\d{3,4})/;

    const title =
      node.querySelector(".qBF1Pd")?.textContent?.trim() ??
      node.querySelector('a[aria-label]')?.getAttribute("aria-label")?.trim() ??
      node.getAttribute("aria-label")?.trim() ??
      "";
    const websiteAnchor =
      Array.from(node.querySelectorAll("a")).find((anchor) => {
        const href = anchor.getAttribute("href") || "";
        return href.startsWith("http") && !href.includes("google.");
      }) ?? null;

    const phoneLine = text.find((line) => phoneRegex.test(line)) ?? "";
    const phone = phoneLine.match(phoneRegex)?.[0] ?? "";
    const category =
      text.find((line) => line.includes("歯科") || line.includes("医院") || line.includes("クリニック")) ?? "";
    const addressLine =
      text.find((line) => /都|道|府|県/.test(line) || /\d{3}-\d{4}/.test(line) || /[一-龠ぁ-んァ-ヶ]\d/.test(line)) ?? "";
    const address = addressLine
      .replace(phoneRegex, "")
      .replace(/営業時間外.*$/, "")
      .replace(/営業開始.*$/, "")
      .replace(/営業中.*$/, "")
      .replace(/[·•]\s*$/, "")
      .trim();

    return {
      name: title,
      category,
      address,
      phone,
      website: websiteAnchor?.getAttribute("href") ?? "",
      rawLines: text,
    };
  });
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  const browser = await chromium.launch({
    channel: "msedge",
    headless: args.headless,
  });

  const context = await browser.newContext({
    locale: "ja-JP",
    viewport: { width: 1440, height: 1100 },
  });

  const page = await context.newPage();
  const url = `https://www.google.com/maps/search/${encodeURIComponent(args.query)}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 120000 });

  const consentButton = page.getByRole("button", { name: /すべて同意|Accept all/i });
  if (await consentButton.count()) {
    await consentButton.first().click();
    await page.waitForTimeout(1000);
  }

  const feed = page.locator('[role="feed"]').first();
  await feed.waitFor({ timeout: 30000 });
  await autoScroll(feed, args.limit, args.waitMs);

  const cards = feed.locator('[role="article"]');
  const count = Math.min(await cards.count(), args.limit);
  const rows = [];

  for (let i = 0; i < count; i += 1) {
    const row = await extractListing(cards.nth(i));
    if (!row.name) {
      continue;
    }

    rows.push({
      query: args.query,
      name: row.name,
      category: row.category,
      address: row.address,
      phone: row.phone,
      website: row.website,
      raw_lines: row.rawLines.join(" | "),
    });
  }

  await browser.close();
  await writeOutputs(args.out, rows);
  process.stdout.write(`${JSON.stringify({ query: args.query, count: rows.length, out: args.out }, null, 2)}\n`);
}

run().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
