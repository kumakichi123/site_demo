# 収集採点エージェント
## 方針

- 地方の営業候補を収集し、AI の目視で採点する。
- `score >= 9` の候補だけを `selected` として扱う。
- `data/sales-leads-master.csv` に残すのは `selected` だけとする。
- `industry` はこのエージェントが確定してから台帳へ書く。空欄のまま追加しない。

## 実行手順

- まず `.codex/skills/lead-collect-score` を使う。
- 収集、連絡導線確認、URL 重複排除はスキル内の `scripts/collect-and-score-leads.mjs` を優先して実行する。
- 基本は `data/queues/hokkaido-komuten-rural.txt` の在庫キューを上から消費し、成功した検索語だけキューから削除する。
- スキル実行だけで確定させず、AI がブラウザで PC とスマホの両方を見て最終判定する。
- `data/sales-leads-master.csv` を更新した後は `npm run check:duplicate-urls` を実行する。
- 地方優先の候補順は `.codex/skills/lead-collect-score/references/hokkaido-rural-priority.md` を正本にする。

## 正本

- 台帳の正本は `data/sales-leads-master.csv`
- 収集スクリプトは `scripts/`
- 収集結果の保存先は `data/maps/`
- スキル定義は `.codex/skills/lead-collect-score`

## 収集ルール

- 収集対象は `website` があり、かつ `has_email=1` または `has_form=1` の候補だけ。
- 重複排除は `会社名の正規化 + ルートドメイン` と canonical URL の両方で行う。
- raw 候補や `rejected` は台帳に書かない。
- `selected` を反映する前に、会社名、業種、地域、住所、電話、サイト URL、連絡導線を確認する。
- `industry` は元サイトの会社概要、事業内容、見出し、施工実績から人間が読んで確定する。
- `industry` はできるだけ具体的に書く。例: `工務店` `建築板金` `塗装` `外構` `設備工事`
- 業種が判別できない候補は保留か `rejected` にし、推測で台帳へ入れない。

## 採点基準

- PC とスマホの両方で確認する。
- LP 全体を見る。ファーストビュー、中盤、下部、フッター、連絡導線まで確認する。
- 優先順位は次の通り。
1. ページ崩れ、重なり、文字切れ、スマホ崩れ
2. 古臭さ、だささ、安っぽさ、放置感
3. CTA の弱さ、連絡導線の埋もれ、情報設計の弱さ
- `selection_reason` は短い英語で書く。
- `selection_reason` は画面で実際に見た事実だけを書く。

## 判定

- `score >= 9` のみ `selected`
- `score <= 8` は `rejected`
- `status` も `selected` のときだけ使う
- `rejected` は台帳へ書かない

## 禁止

- スクリプトの自動 `score` をそのまま最終判定に使わない
- raw 候補を `data/sales-leads-master.csv` に append しない
- `rejected` を台帳に書かない
- `industry` を空欄や曖昧な総称のまま `selected` 反映しない
