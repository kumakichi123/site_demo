"use client";

import { useState } from "react";
import type { CompanyData } from "@/data/company";

export function Header({ company }: { company: CompanyData }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";

    const overlay = document.getElementById("mobile-nav-overlay");
    if (overlay) {
      overlay.classList.toggle("active", next);
    }
  };

  return (
    <header className="header" id="header">
      <div className="header-main">
        <a href="#" className="logo" id="logo">
          <div className="logo-text">
            <span className="logo-jp">{company.corporateName}</span>
            <span className="logo-en">{company.nameEn}</span>
          </div>
        </a>
        <nav className="nav-top" id="nav-top">
          <a href="#concept">概要</a>
          <a href="#service">対応内容</a>
          <a href={company.contactHref} className="nav-top-cta">
            お問い合わせ
          </a>
        </nav>
        <button
          className={`hamburger${menuOpen ? " active" : ""}`}
          id="hamburger"
          aria-label="メニューを開く"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
