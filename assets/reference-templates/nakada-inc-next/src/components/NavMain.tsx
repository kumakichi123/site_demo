import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";

export function NavMain({ company }: { company: CompanyData }) {
  return (
    <nav className="nav-main" id="nav-main">
      <div className="nav-container">
        {company.navigation.map((item) => (
          <div
            className="nav-item"
            key={item.labelEn}
            data-dropdown={item.children ? item.labelEn.toLowerCase().replace(/\s+/g, "") : undefined}
          >
            <DemoLink href={item.href} className="nav-link">
              <span className="nav-jp">{item.labelJp}</span>
              <span className="nav-en">{item.labelEn}</span>
            </DemoLink>
            {item.children && (
              <div className="nav-dropdown">
                {item.children.map((child) => (
                  <DemoLink href={child.href} key={child.label}>
                    {child.label}
                  </DemoLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
