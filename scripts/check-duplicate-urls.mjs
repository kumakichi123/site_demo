import fs from "node:fs";
import path from "node:path";

const csvPath = path.resolve("data", "sales-leads-master.csv");

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
    let normalized = url.toString().toLowerCase();
    normalized = normalized.replace(/\/+$/, "");
    return normalized;
  } catch {
    return trimmed.toLowerCase().replace(/\/+$/, "");
  }
}

if (!fs.existsSync(csvPath)) {
  console.error(`Missing file: ${csvPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
const [header, ...body] = parseCsv(raw);
const websiteIndex = header.indexOf("website");
const companyIndex = header.indexOf("company_name");
const idIndex = header.indexOf("id");

if (websiteIndex === -1 || companyIndex === -1 || idIndex === -1) {
  console.error("CSV is missing required columns: id, company_name, website");
  process.exit(1);
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

if (duplicates.size === 0) {
  console.log("No duplicate website URLs found.");
  process.exit(0);
}

console.error("Duplicate website URLs found:");
for (const [website, items] of duplicates.entries()) {
  console.error(`- ${website}`);
  for (const item of items) {
    console.error(`  - id=${item.id} company=${item.company_name} raw=${item.website}`);
  }
}

process.exit(2);
