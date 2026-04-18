import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../mail-gate/page.module.css";

export const metadata: Metadata = {
  title: "Mail Gate Terms | みらいアクシス",
  description:
    "みらいアクシス Mail Gate の利用規約。ローカル送信ゲートの利用条件、禁止事項、責任範囲を定めます。",
};

const sections = [
  {
    title: "1. 適用範囲",
    body: [
      "本利用規約は、みらいアクシスが提供する Mail Gate の利用条件を定めるものです。",
      "Mail Gate は、ローカル環境で営業メール送信を管理するための送信ゲートです。",
    ],
  },
  {
    title: "2. 利用目的",
    body: [
      "Mail Gate は、重複送信防止、文字化け検査、添付送信、および送信履歴記録を目的として利用されます。",
      "利用者は、適法かつ正当な業務目的に限って本サービスを利用するものとします。",
    ],
  },
  {
    title: "3. 禁止事項",
    body: [
      "法令または公序良俗に反する目的で利用すること。",
      "不正アクセス、なりすまし、迷惑行為、大量のスパム送信に利用すること。",
      "第三者の権利または利益を侵害する目的で利用すること。",
    ],
  },
  {
    title: "4. 免責",
    body: [
      "みらいアクシスは、利用者の送信内容そのものについて保証を行いません。",
      "利用者は、自らの責任で送信内容、宛先、添付ファイルを確認して利用するものとします。",
    ],
  },
  {
    title: "5. お問い合わせ",
    body: [
      "Mail Gate に関する問い合わせ先:",
      "info@mirai-axis.com",
    ],
  },
];

export default function MailGateTermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Terms of Service</p>
          <h1>Mail Gate Terms</h1>
          <p className={styles.lead}>
            この利用規約は、みらいアクシスが運用する Mail Gate の利用条件を説明するものです。
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
            <h2>Related Pages</h2>
            <div className={styles.links}>
              <Link className={styles.linkPill} href="/mail-gate">
                Back to Mail Gate
              </Link>
              <Link className={styles.linkPill} href="/privacy/mail-gate">
                Privacy Policy
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
