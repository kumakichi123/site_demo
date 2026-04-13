"use client";

import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";

export function MobileNav({ company }: { company: CompanyData }) {
  const handleLinkClick = () => {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("mobile-nav-overlay");
    if (hamburger) hamburger.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  return (
    <div className="mobile-nav-overlay" id="mobile-nav-overlay">
      <nav className="mobile-nav">
        {company.navigation.map((item) => (
          <div className="mobile-nav-group" key={item.labelEn}>
            <DemoLink
              href={item.href}
              className="mobile-nav-title"
              onClick={handleLinkClick}
            >
              {item.labelJp} <span>{item.labelEn}</span>
            </DemoLink>
            {item.children?.map((child) => (
              <DemoLink
                href={child.href}
                key={child.label}
                onClick={handleLinkClick}
              >
                {child.label}
              </DemoLink>
            ))}
          </div>
        ))}
        <div className="mobile-nav-contact">
          {company.phone ? (
            <a
              href={`tel:${company.phone}`}
              className="mobile-phone"
              onClick={handleLinkClick}
            >
              Tel : {company.phone}
            </a>
          ) : null}
          <a
            href={company.contactHref}
            className="mobile-inquiry"
            onClick={handleLinkClick}
          >
            お問い合わせ
          </a>
        </div>
      </nav>
    </div>
  );
}
