import "./globals.css";
import { DemoDisclaimer } from "@/components/DemoDisclaimer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/hero-slide-1.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <DemoDisclaimer />
      </body>
    </html>
  );
}
