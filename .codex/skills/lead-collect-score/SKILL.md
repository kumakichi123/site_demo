---
name: lead-collect-score
description: Collect and score local sales leads from search query lists inside this project. Use when Codex needs to run Google Maps collection, detect whether a website has email or inquiry form contact paths, remove website duplicates against `data/sales-leads-master.csv`, and then visually score each candidate in the browser before appending only selected rows into the master CSV.
---

# Lead Collect Score

Use this skill for this repository only.

When collecting Hokkaido komuten leads, read `references/hokkaido-rural-priority.md` first and use the listed municipalities before larger regional cities.

Default to queue-driven operation. Use `data/queues/hokkaido-komuten-rural.txt` as inventory and consume from the top after a successful run.

Run `scripts/collect-and-score-leads.mjs` from the project root for collection, contact analysis, and duplicate removal. Pass either a UTF-8 text file with one query per line, or a queue file.

```powershell
node .codex/skills/lead-collect-score/scripts/collect-and-score-leads.mjs `
  --project-root . `
  --queue data/queues/hokkaido-komuten-rural.txt `
  --take 5
```

Do not rely on the script's heuristic `score` / `decision` / `status` as final scoring. Final selection must be done by AI visual review in the browser.

```powershell
node .codex/skills/lead-collect-score/scripts/collect-and-score-leads.mjs `
  --project-root . `
  --queue data/queues/hokkaido-komuten-rural.txt `
  --take 5
```

Workflow:

1. Read the next queries from the queue, or use the explicit query file if provided.
2. Run the existing Maps batch collector in this project.
3. Run the existing contact availability analyzer.
4. Keep only rows with `website` and at least one of `has_email` or `has_form`.
5. Drop duplicates by normalized company name plus root domain, and also drop canonical URL duplicates against `data/sales-leads-master.csv`.
6. Open each remaining candidate in the browser and visually inspect the LP in both PC and mobile.
7. Review the whole LP, not just the top. At minimum inspect first view, middle sections, lower sections, footer, and the visible contact path.
8. Judge `score`, `decision`, and `status` from visual facts only. Use the script's heuristic output only as a weak hint, never as the final answer.
9. Before appending, determine `industry` from the website itself by reading the company profile, service descriptions, headings, and project examples. Do not leave `industry` blank for a selected row.
10. Append only the visually approved `selected` rows into `data/sales-leads-master.csv` with `utf-8-sig`.
11. If the run succeeds, remove the consumed queries from the queue.

Visual scoring rules:

- Always inspect both PC and mobile layouts.
- Always inspect the LP beyond the first view. Long one-page sites should be checked from top to bottom.
- Prioritize visual judgment in this order:
  1. Page breakage, overlap, text clipping, and mobile collapse.
  2. Old-looking UI, obvious ugliness, cheapness, and stale presentation.
  3. Weak CTA placement, buried contact path, and confusing information hierarchy.
- Check visual age, spacing, typography, hierarchy, imagery, CTA placement, scroll fatigue, footer trust signals, and whether service / company / contact information is easy to find.
- Check practical trust signals such as `http`, `Not Secure`, outdated notices, stale news, broken-looking links, or placeholder-like presentation.
- Mark `selected` only when AI visual review concludes that improvement potential is clearly large and worth outbound sales.
- Do not write `rejected` candidates into `data/sales-leads-master.csv`.
- `industry` must be chosen by human reading, not guessed from the query alone.
- Use a concrete industry label when possible, such as `工務店`, `建築板金`, `塗装`, `外構`, or `設備工事`.
- Write `selection_reason` in short plain English only, using ASCII where possible.
- Keep `selection_reason` factual and based only on what was actually seen on screen.
