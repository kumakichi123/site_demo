import fs from "node:fs/promises";
import path from "node:path";
import * as cheerio from "cheerio";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36";

function parseArgs(argv) {
  const args = {
    in: "",
    out: "",
    limit: 50,
  };

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
      continue;
    }
    if (token === "--limit" && next) {
      args.limit = Number.parseInt(next, 10) || 50;
      i += 1;
    }
  }

  if (!args.in || !args.out) {
    throw new Error("Missing required --in or --out value.");
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
  return `${[headers.join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\n")}\n`;
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function writeRows(filePath, rows) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  if (filePath.endsWith(".csv")) {
    await fs.writeFile(filePath, toCsv(rows), "utf8");
    return;
  }
  await fs.writeFile(filePath, JSON.stringify(rows, null, 2), "utf8");
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": USER_AGENT,
      "accept-language": "ja,en-US;q=0.9,en;q=0.8",
    },
    redirect: "follow",
  });
  const html = await response.text();
  return {
    ok: response.ok,
    status: response.status,
    finalUrl: response.url,
    html,
  };
}

function absoluteUrl(baseUrl, href) {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return "";
  }
}

function textOf($, selector) {
  return $(selector)
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean);
}

function collectEmails(source) {
  return Array.from(new Set(source.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []));
}

function collectPhones(source) {
  return Array.from(new Set(source.match(/0\d{1,4}-\d{1,4}-\d{3,4}/g) || []));
}

function scorePriority({ formUrl, email, issues }) {
  let score = 7;
  if (formUrl || email) {
    score += 1;
  }
  if (issues.some((issue) => issue.includes("古い") || issue.includes("導線"))) {
    score += 1;
  }
  if (issues.some((issue) => issue.includes("スマホ"))) {
    score += 1;
  }
  return Math.min(score, 10);
}

function buildPitch(issues) {
  if (issues.some((issue) => issue.includes("問い合わせ"))) {
    return "予約・問い合わせ導線を整理し、スマホで迷わず行動できる歯科サイトに刷新する";
  }
  if (issues.some((issue) => issue.includes("採用"))) {
    return "患者向け導線と採用導線を分け、医院の信頼感を保ったまま応募も取りやすくする";
  }
  return "清潔感のあるトップと診療案内の整理で、初診前の不安を減らす歯科サイトに整える";
}

function detectIssues({ $, html, finalUrl, contactSignals, title, description }) {
  const issues = [];
  const viewport = $('meta[name="viewport"]').attr("content") || "";
  const telLinks = $('a[href^="tel:"]').length;
  const hasForm = contactSignals.formUrl;
  const bodyText = $("body").text().replace(/\s+/g, " ").trim();
  const navText = $("nav, header").text();
  const footerText = $("footer").text();
  const lowerHtml = html.toLowerCase();

  if (!viewport) {
    issues.push("スマホ向け viewport 指定がなく、モバイル表示が古い可能性が高い");
  }
  if (!hasForm && !contactSignals.email) {
    issues.push("問い合わせフォームもメール表記も見当たらず、非電話の導線が弱い");
  }
  if (telLinks === 0) {
    issues.push("電話番号は見えても tel リンクがなく、スマホから発信しづらい");
  }
  if (!title || /mysite|home|ホーム$/i.test(title)) {
    issues.push("ページタイトルが弱く、医院名や診療内容の訴求が検索面でも損している");
  }
  if (!description) {
    issues.push("meta description がなく、検索結果で医院の強みが伝わりにくい");
  }
  if (/wordpress|wix|jimdo|ameba|studio/i.test(lowerHtml)) {
    issues.push("テンプレート感が強く、見た目の古さが出やすい構成になっている");
  }
  if (!/予約|お問い合わせ|問合せ|contact/i.test(navText + footerText + bodyText.slice(0, 3000))) {
    issues.push("予約や問い合わせの導線が目立たず、次の行動が分かりにくい");
  }
  if (/採用|求人/.test(bodyText) && /診療案内|患者|初診/.test(bodyText)) {
    issues.push("患者向け情報と採用訴求が同じ導線に混在し、トップの目的が散りやすい");
  }
  if (bodyText.length < 1200) {
    issues.push("説明量が少なく、初診患者が判断する材料が不足している");
  }
  if (!/^https:\/\//i.test(finalUrl)) {
    issues.push("HTTPS で統一されておらず、信頼感の面で不利");
  }

  return issues.slice(0, 3);
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

function pickRegion(text) {
  const match = text.match(/(北海道|東京都|京都府|大阪府|.{2,3}県)/);
  return match ? match[1] : "";
}

async function analyzeSite(row) {
  const home = await fetchHtml(row.website);
  const $ = cheerio.load(home.html);
  const title = $("title").text().trim();
  const description = $('meta[name="description"]').attr("content")?.trim() || "";
  const emails = new Set([
    ...collectEmails(home.html),
    ...textOf($, 'a[href^="mailto:"]').map((value) => value.replace(/^mailto:/i, "")),
  ]);
  const phones = new Set([
    ...(row.phone ? [row.phone] : []),
    ...collectPhones($("body").text()),
  ]);

  let formUrl = "";
  const contactCandidates = findContactCandidates($, home.finalUrl);

  for (const candidate of contactCandidates) {
    try {
      const contact = await fetchHtml(candidate);
      const $$ = cheerio.load(contact.html);
      collectEmails(contact.html).forEach((email) => emails.add(email));
      collectPhones($$("body").text()).forEach((phone) => phones.add(phone));
      const hasForm =
        $$("form").length > 0 ||
        $$('iframe[src*="form"], iframe[src*="contact"]').length > 0 ||
        $$('a[href*="form"], a[href*="contact"], a[href*="inquiry"]').length > 0;
      if (hasForm) {
        formUrl = contact.finalUrl;
        break;
      }
    } catch {
      // Ignore failed contact fetches and continue.
    }
  }

  const issues = detectIssues({
    $,
    html: home.html,
    finalUrl: home.finalUrl,
    contactSignals: {
      formUrl,
      email: Array.from(emails)[0] || "",
    },
    title,
    description,
  });

  return {
    "会社名": row.name,
    "業種": "歯科医院",
    "地域": pickRegion(row.address) || row.query.replace(/^歯科医院\s*/, ""),
    "従業員規模推定": "1-20人（推定）",
    "非上場推定": "非上場（推定）",
    "電話番号": Array.from(phones)[0] || row.phone || "",
    "メールアドレス": Array.from(emails)[0] || "",
    "問い合わせフォームURL": formUrl,
    "サイトURL": home.finalUrl,
    "サイトの弱点": issues.join(" / ") || "問い合わせ導線や情報設計は最低限あるが、差別化ポイントが薄い",
    "営業優先度": scorePriority({ formUrl, email: Array.from(emails)[0] || "", issues }),
    "提案切り口": buildPitch(issues),
    "notes": `title=${title || "none"}; contact_candidates=${contactCandidates.length}`,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const input = await readJson(args.in);
  const withWebsite = input.filter((row) => row.website).slice(0, args.limit);
  const results = [];

  for (const row of withWebsite) {
    try {
      const analyzed = await analyzeSite(row);
      results.push(analyzed);
    } catch (error) {
      results.push({
        "会社名": row.name,
        "業種": "歯科医院",
        "地域": pickRegion(row.address) || row.query.replace(/^歯科医院\s*/, ""),
        "従業員規模推定": "1-20人（推定）",
        "非上場推定": "非上場（推定）",
        "電話番号": row.phone || "",
        "メールアドレス": "",
        "問い合わせフォームURL": "",
        "サイトURL": row.website,
        "サイトの弱点": `サイト取得に失敗: ${error.message}`,
        "営業優先度": 5,
        "提案切り口": "サイト構造と問い合わせ導線を再整備し、更新しやすい形に切り替える",
        "notes": "fetch_failed",
      });
    }
    if (results.length % 5 === 0) {
      await writeRows(args.out, results);
    }
  }

  await writeRows(args.out, results);
  process.stdout.write(`${JSON.stringify({ count: results.length, out: args.out }, null, 2)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
