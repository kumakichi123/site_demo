import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../mail-gate/page.module.css";

export const metadata: Metadata = {
  title: "Mail Gate Privacy Policy | みらいアクシス",
  description:
    "みらいアクシス Mail Gate のプライバシーポリシー。Gmail API を通じて扱うデータの利用目的、保存方法、問い合わせ先を示します。",
};

const sections = [
  {
    title: "1. 取得する情報",
    body: [
      "Mail Gate は、送信対象として入力されたメールアドレス、件名、本文、添付ファイルのパス、送信結果、送信時刻を扱います。",
      "Google OAuth により取得した Gmail 送信権限は、メール送信処理のためにのみ使います。",
    ],
  },
  {
    title: "2. 利用目的",
    body: [
      "営業メール送信を安全に実行するため。",
      "重複送信の防止、文字化け検査、送信履歴確認のため。",
      "送信結果の記録とトラブル調査のため。",
    ],
  },
  {
    title: "3. 保存と管理",
    body: [
      "送信履歴はみらいアクシス管理下のローカル送信ログに保存されます。",
      "Google OAuth の refresh token はローカル設定ファイルに保存され、Gmail API の再認証に利用されます。",
    ],
  },
  {
    title: "4. 第三者提供",
    body: [
      "法令に基づく場合を除き、取得した情報を第三者へ販売または提供しません。",
      "メール送信の実行には Google の Gmail API を利用します。",
    ],
  },
  {
    title: "5. 問い合わせ先",
    body: [
      "みらいアクシス",
      "Email: info@mirai-axis.com",
    ],
  },
];

export default function MailGatePrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Privacy Policy</p>
          <h1>Mail Gate Privacy Policy</h1>
          <p className={styles.lead}>
            このプライバシーポリシーは、みらいアクシスが運用する Mail Gate における Google
            データおよび送信情報の取り扱いを説明するものです。
          </p>
        </header>

        <div className={styles.stack}>
          {sections.map((section) => (
            <section className={styles.card} key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className={styles.card}>
            <h2>Related Page</h2>
            <div className={styles.links}>
              <Link className={styles.linkPill} href="/mail-gate">
                Back to Mail Gate
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
