import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | みらいアクシス",
  description:
    "みらいアクシス運営事務局の特定商取引法に基づく表記です。",
};

const tokushohoItems = [
  {
    label: "販売事業者",
    value: "みらいアクシス運営事務局（個人事業主：朝部耀平）",
  },
  {
    label: "運営統括責任者",
    value: "朝部耀平",
  },
  {
    label: "所在地",
    value: "〒001-0018 北海道札幌市北区北18条西6-1-7-201",
  },
  {
    label: "電話番号",
    value: "070-3619-7051",
  },
  {
    label: "メールアドレス",
    value: "info@mirai-axis.com",
  },
  {
    label: "販売価格",
    value: "各サービスページまたは個別見積書に表示します。",
  },
  {
    label: "商品代金以外の必要料金",
    value:
      "インターネット接続にかかる通信費、振込手数料その他支払に伴う費用は、お客様のご負担となります。",
  },
  {
    label: "支払方法",
    value: "銀行振込その他、申込時に案内する方法によりお支払いいただきます。",
  },
  {
    label: "支払時期",
    value: "申込確定後、案内する期日までにお支払いいただきます。",
  },
  {
    label: "役務提供時期",
    value: "申込内容確定および入金確認後、案内した開始時期にサービスを提供します。",
  },
  {
    label: "キャンセル・返金",
    value:
      "デジタルサービスの性質上、提供開始後のキャンセルおよび返金には原則として応じられません。提供開始前のキャンセルその他個別条件がある場合は、申込ページ、見積書または案内時に明示します。",
  },
] as const;

export default function TokushohoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <p className={styles.kicker}>Specified Commercial Transactions Act</p>
          <h1>特定商取引法に基づく表記</h1>
          <p className={styles.intro}>
            営業案内およびサービス提供に関する事業者情報を、以下のとおり掲載します。
          </p>
        </header>

        <div className={styles.card}>
          <dl className={styles.list}>
            {tokushohoItems.map((item) => (
              <div className={styles.row} key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
