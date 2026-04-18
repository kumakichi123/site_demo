"use client";

import { usePathname } from "next/navigation";

function shouldHide(pathname: string | null): boolean {
  if (!pathname) return false;

  return (
    pathname === "/mail-gate" ||
    pathname.startsWith("/privacy/mail-gate") ||
    pathname.startsWith("/terms/mail-gate")
  );
}

export function DemoDisclaimer() {
  const pathname = usePathname();

  if (shouldHide(pathname)) {
    return null;
  }

  return (
    <p className="demo-disclaimer">
      このページは営業用デモです。公式サイトではありません。
    </p>
  );
}
