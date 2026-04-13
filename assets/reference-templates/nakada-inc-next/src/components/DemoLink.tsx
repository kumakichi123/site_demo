"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DemoLinkProps = {
  href: string;
  className?: string;
  id?: string;
  ariaLabel?: string;
  children: ReactNode;
  note?: string;
  noteClassName?: string;
  onClick?: () => void;
};

function isDemoSafeHref(href: string) {
  return (
    href.startsWith("#") ||
    href.startsWith("/") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  );
}

function cx(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function DemoLink({
  href,
  className,
  id,
  ariaLabel,
  children,
  note = "契約後に実装",
  noteClassName,
  onClick,
}: DemoLinkProps) {
  const [showNote, setShowNote] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (isDemoSafeHref(href)) {
    return (
      <a
        href={href}
        className={className}
        id={id}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  const revealNote = () => {
    setShowNote(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowNote(false), 2200);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      revealNote();
    }
  };

  return (
    <span
      className={cx(className, "demo-link-disabled")}
      id={id}
      aria-label={ariaLabel}
      aria-disabled="true"
      role="button"
      tabIndex={0}
      onClick={revealNote}
      onKeyDown={handleKeyDown}
    >
      {children}
      {showNote ? (
        <span className={cx("demo-link-note", noteClassName)}>{note}</span>
      ) : null}
    </span>
  );
}
