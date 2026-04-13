import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36";

function parseArgs(argv) {
  const args = { in: "", out: "" };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];
    if (token === "--in" && next) {
      args.in = next;
      i += 1;
      continue;
    }
    if (token === "--out" && next) {
      args.out = next;
      i += 1;
    }
  }
  if (!args.in || !args.out) {
    throw new Error("Missing required --in or --out value.");
  }
  return args;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": USER_AGENT,
      "accept-language": "ja,en-US;q=0.9,en;q=0.8",
    },
    redirect: "follow",
  });
  return {
    ok: response.ok,
    finalUrl: response.url,
    html: await response.text(),
  };
}

function absoluteUrl(baseUrl, href) {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return "";
  }
}

function collectEmails(source) {
  return Array.from(new Set(source.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []));
}

function findContactCandidates($, baseUrl) {
  const candidates = [];
  $('a[href]').each((_, el) => {
    const href = $(el).attr("href") || "";
    const text = $(el).text().trim();
    if (/contact|inquiry|reserve|reservation|mail|form|お問い合わせ|問合せ|予約|連絡/i.test(`${href} ${text}`)) {
      const url = absoluteUrl(baseUrl, href);
      if (url) {
        candidates.push(url);
      }
    }
  });
  return Array.from(new Set(candidates)).slice(0, 5);
}

function toCsv(rows) {
  if (rows.length === 0) {
    return "";
  }
  const headers = Object.keys(rows[0]);
  const esc = (value) => {
    const text = value == null ? "" : String(value);
    return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };
  return `${[headers.join(","), ...rows.map((row) => headers.map((h) => esc(row[h])).join(","))].join("\n")}\n`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = JSON.parse(await fs.readFile(args.in, "utf8"));
  const rows = [];

  for (const row of input) {
    const industry = row.query.replace(/\s+秋田県$/, "");
    let hasSite = Boolean(row.website);
    let hasEmail = false;
    let hasForm = false;
    let notes = "";

    if (row.website) {
      try {
        const home = await fetchHtml(row.website);
        const $ = cheerio.load(home.html);
        hasEmail = collectEmails(home.html).length > 0 || $('a[href^="mailto:"]').length > 0;
        const contactCandidates = findContactCandidates($, home.finalUrl);

        for (const candidate of contactCandidates) {
          try {
            const contact = await fetchHtml(candidate);
            const $$ = cheerio.load(contact.html);
            if (collectEmails(contact.html).length > 0 || $$('a[href^="mailto:"]').length > 0) {
              hasEmail = true;
            }
            if (
              $$("form").length > 0 ||
              $$('iframe[src*="form"], iframe[src*="contact"]').length > 0 ||
              /contact|inquiry|form|お問い合わせ|問合せ/.test($$("body").text())
            ) {
              hasForm = true;
              break;
            }
          } catch {
            // Ignore individual contact page errors.
          }
        }
        notes = `contact_candidates=${contactCandidates.length}`;
      } catch (error) {
        hasSite = false;
        notes = `fetch_failed=${error.message}`;
      }
    }

    rows.push({
      query: row.query,
      industry,
      name: row.name,
      website: row.website || "",
      has_site: hasSite ? 1 : 0,
      has_email: hasEmail ? 1 : 0,
      has_form: hasForm ? 1 : 0,
      notes,
    });
  }

  await fs.mkdir(path.dirname(args.out), { recursive: true });
  await fs.writeFile(args.out, toCsv(rows), "utf8");
  process.stdout.write(`${JSON.stringify({ count: rows.length, out: args.out }, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
