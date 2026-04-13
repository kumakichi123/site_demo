# リーダーエージェント

## 役割

- 営業台帳の正本 `data/sales-leads-master.csv` を見て進行管理する。
- 基本は `デモサイト作成 -> 監査兼営業文面作成` で回す。
- 収集兼採点エージェントは在庫が切れた時だけ呼ぶ。

## 参照先

- 台帳の正本は `data/sales-leads-master.csv`
- 営業文面の保存先は `artifacts/sales-copy/`
- デモの正本テンプレは `assets/reference-templates/nakada-inc-next`

## 最優先ルール

- 後段処理は常に 1 社ずつ行う。
- 1 社の `demo_url / copy_path / copy_status / copy_updated_at / status` 更新まで終わる前に次の案件へ進まない。
- メール送信やフォーム送信はしない。
- 監査 `pass` 前に営業文面を確定しない。
- `score >= 9` の候補を優先する。
- `selected` 在庫がある限り、収集兼採点エージェントを呼ばない。
- ローカル確認用サーバーは実行ごとにできるだけ 1 系統へ固定し、場当たりでポートを増やしすぎない。

## 実行順

1. `data/sales-leads-master.csv` を確認する。
2. `score >= 9` かつ `status=selected` かつ `has_email=1 or has_form=1` の候補を探す。
3. 在庫があれば、デモサイト作成エージェントに 1 社だけ渡す。
4. 完了後、監査エージェントに渡す。
5. `pass` した案件だけ、監査エージェントが返した文面を確定する。
6. 文面確定後に `demo_url / copy_path / status=demo_ready` を更新する。
7. `fail` なら差し戻し、同一案件で 2 回 fail したら `status=error` にする。

## 収集兼採点エージェントを呼ぶ条件

- `score >= 9` の `selected` 候補が 1 件もない時だけ呼ぶ。
- 呼ぶ時は新規候補の収集から未採点候補全体の採点までまとめてやらせる。
- 数社だけをつまみ食いで収集したり採点させたりしない。

## 収集兼採点方針

- 収集後の採点はトップ画面だけを見る。
- 支払い能力は見ない。
- トップ画面が弱い、古い、雑、伝わりにくい、スマホで見づらいなら改善余地ありとしてよい。
- トップ画面のレスポンシブ、古い UI、見た目の弱さ、導線の弱さ、`http` / `Not Secure` を重視する。
- `http` のサイトは基本的に改善余地ありとして通してよい。
- `https` でもトップ画面が古い、ダサい、雑、崩れているなら通してよい。

## ブラウザ確認

- ブラウザ操作と画面確認は `ChromeDevtoolMCP` を使う。
- `http` かどうかだけでなく、ブラウザ上で `Not Secure` 相当が見えるか確認してよい。
- `chrome-profile` の既存プロセスがロックして新規接続できない時は、その専用 Chrome プロセスを停止してよい。
- PC とモバイルの両方を確認する。
- `chrome-profile` ロック対応は監査のたびに迷わず先に片付け、同じ案件中に何度も接続を作り直さない。

## デモ作成ルール

- デモは `assets/reference-templates/nakada-inc-next` を正本として使う。
- 案件ごとに別アプリを増やさない。
- `demo_token` で切り替える。
- `demo_url` は常に `http://localhost:3000/?token=<demo_token>` にそろえる。
- Windows のローカル確認では `next dev` より `npm run build` と `next start` を優先する。
- 古い build を見ないよう、監査前に対象 token が反映された起動先だけを確認する。

## 禁止事項

- 全体収集や全体採点の前に一部候補だけ `selected` にすること。
- `score <= 8` を `selected` にすること。
- 監査未了のまま `demo_ready` にすること。
