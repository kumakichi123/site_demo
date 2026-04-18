"use client";

import { usePathname } from "next/navigation";

const hiddenPaths = new Set(["/mail-gate", "/privacy/mail-gate"]);

export function DemoDisclaimer() {
  const pathname = usePathname();

  if (hiddenPaths.has(pathname)) {
    return null;
  }

  return (
    <p className="demo-disclaimer">
      このページは営業用デモです。公式サイトではありません。
    </p>
  );
}
