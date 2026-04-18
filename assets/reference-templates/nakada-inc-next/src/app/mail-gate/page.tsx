import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mail Gate | みらいアクシス",
  description:
    "みらいアクシスの Mail Gate は、重複送信防止と文字化け検査を行ったうえで Gmail API から営業メールを送信するローカル運用向けツールです。",
};

const features = [
  "同一メールアドレスへの重複送信をブロックします。",
  "件名と本文の文字化けらしきパターンを検知し、危険な送信を止めます。",
  "送信結果を送信ログへ記録し、あとから確認できます。",
  "画像やファイルの添付送信に対応します。",
];

const dataPoints = [
  {
    label: "アプリの名称",
    value: "Mail Gate",
  },
  {
    label: "提供者",
    value: "みらいアクシス",
  },
  {
    label: "利用目的",
    value:
      "自社の営業メール送信を安全に実行するために利用します。送信前に重複送信防止と文字化け検査を行い、送信後は履歴を保存します。",
  },
  {
    label: "必要な Google 権限",
    value:
      "Gmail 送信権限を利用します。これは、ユーザーが明示的に送信対象としたメールを Gmail から送るためにのみ使われます。",
  },
  {
    label: "利用対象",
    value:
      "みらいアクシスが管理するローカル送信ゲートの運用者、およびその業務用送信アカウントです。",
  },
];

export default function MailGatePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Local Gmail Sending Gate</p>
          <h1>Mail Gate</h1>
          <p className={styles.lead}>
            Mail Gate は、みらいアクシスがローカル環境で運用する営業メール送信ゲートです。
            Gmail API を用いてメールを送信する前に、重複送信や文字化けらしき文面を検査し、
            送信履歴を安全に記録します。
          </p>
        </header>

        <div className={styles.stack}>
          <section className={styles.card}>
            <h2>What This App Does</h2>
            <p>
              このアプリは、送信オペレーションを一つの入口に集約し、誤送信や重複送信を減らすために使われます。
              送信対象の宛先、件名、本文、添付ファイル情報を受け取り、検査を通過したメールだけを Gmail
              API で送信します。
            </p>
            <ul className={styles.list}>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2>App Details</h2>
            <dl className={styles.metaList}>
              {dataPoints.map((item) => (
                <div className={styles.metaRow} key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.card}>
            <h2>Contact and Policy</h2>
            <p>
              Mail Gate に関する問い合わせや、Google データの取り扱いについては以下を確認してください。
            </p>
            <div className={styles.links}>
              <Link className={styles.linkPill} href="/privacy/mail-gate">
                Mail Gate Privacy Policy
              </Link>
              <a className={styles.linkPill} href="mailto:info@mirai-axis.com">
                info@mirai-axis.com
              </a>
            </div>
            <p className={styles.notice}>
              このページは OAuth 同意画面で表示されるアプリ情報の補足として公開しています。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
