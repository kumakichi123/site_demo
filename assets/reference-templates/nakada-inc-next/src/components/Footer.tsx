import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";

export function Footer({ company }: { company: CompanyData }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <a href="#header" className="page-top" id="page-top" aria-label="ページトップへ">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15L12 9L6 15" />
        </svg>
      </a>

      <div className="footer-nav">
        <div className="container">
          <div className="footer-grid">
            {company.footerColumns.map((col, i) => (
              <div className="footer-col" key={i}>
                <h4 className="footer-heading">{col.heading}</h4>
                <ul>
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <DemoLink
                        href={link.href}
                        className={link.indent ? "footer-sub" : undefined}
                        note="契約後に実装"
                        noteClassName="demo-link-note-inline"
                      >
                        {link.label.replace("[会社名]", company.name)}
                      </DemoLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-links">
            {company.footerBottomLinks.map((link, i) => (
              <DemoLink
                href={link.href}
                key={i}
                note="契約後に実装"
                noteClassName="demo-link-note-inline"
              >
                {link.label}
              </DemoLink>
            ))}
          </div>
          <div className="footer-social">
            {company.social.facebook && (
              <DemoLink
                href={company.social.facebook}
                aria-label="Facebook"
                className="social-link"
                id="social-facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </DemoLink>
            )}
            {company.social.instagram && (
              <DemoLink
                href={company.social.instagram}
                aria-label="Instagram"
                className="social-link"
                id="social-instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </DemoLink>
            )}
          </div>
          <p className="footer-copyright">
            copyright&copy; {year} {company.copyrightName} All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
