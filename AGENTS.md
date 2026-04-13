# AGENTS.md instructions for C:\Users\asabe\Site_demo

## プロジェクト概要

- このプロジェクトは、Webサイトのリメイク営業を回すための運用用ワークスペース。
- 現行フローは `候補収集兼採点 -> デモ作成 -> 監査兼営業文面 -> 人間が送信`。
- 営業文面の本体は `artifacts/sales-copy/` に保存し、営業台帳の正本は `data/sales-leads-master.csv` とする。
- 営業用デモは `assets/reference-templates/nakada-inc-next` を正本として使い、案件ごとにアプリは複製せず `?token=<demo_token>` で切り替える。

## 主要パス

- `.codex/agents/`: 現行運用の役割定義
- `data/sales-leads-master.csv`: 営業台帳の正本
- `artifacts/sales-copy/`: 営業文面の保存先
- `assets/reference-templates/nakada-inc-next`: デモの正本テンプレ
- `scripts/`: 収集や補助スクリプト
- `data/maps/`: 収集結果の保存先

- 各エージェントは作業開始時に、自分の Agent プロンプト `C:/Users/asabe/Site_demo/.codex/agents/` 配下を確認する。
- 候補補充は `.codex/agents/lead-collect-score-agent.md` の収集兼採点エージェントでまとめて行い、収集エージェントと採点エージェントを分けない。
- ブラウザ操作や画面確認が必要なときは `ChromeDevtoolMCP` を使う。
- `ChromeDevtoolMCP` が既存セッションやロックで使えないときは、その専用 Chrome プロセスを停止して接続し直してよい。

- `data/*.csv` に日本語が入る場合、PowerShell や `cmd` の標準出力経由で行全体を書き戻さない。
- 日本語を含む CSV の更新は、`utf-8-sig` を明示した処理か `apply_patch` の直接編集だけを使う。
- 文字列列に `?` が出た場合は表示崩れではなく保存済み破損として扱い、再シリアライズを止めて元行を直接修正する。
- `data/sales-leads-master.csv` を更新した後は `npm run check:duplicate-urls` を実行し、URL 重複があれば作業結果で警告する。
