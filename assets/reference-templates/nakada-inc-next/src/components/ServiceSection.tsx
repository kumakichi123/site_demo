import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ServiceSection({ company }: { company: CompanyData }) {
  const { service } = company;

  return (
    <section className="section service" id="service">
      <div className="container">
        <div className="section-grid service-grid">
          <ScrollReveal className="service-image">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal className="service-content">
            <div className="section-header">
              <h2 className="section-title-en">SERVICE</h2>
              <p className="section-title-jp">{service.sectionLabel}</p>
            </div>
            <div className="section-divider"></div>
            <h3 className="service-headline">
              {service.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h3>
            <div className="service-cards">
              {service.cards.map((card, i) => (
                <DemoLink
                  href={card.href}
                  className="service-card"
                  id={`service-card-${i}`}
                  key={i}
                  note="契約後に実装"
                >
                  <span className="service-card-title">{card.title}</span>
                  <span className="service-card-en">{card.titleEn}</span>
                  <div className="service-card-icon">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {card.iconPaths.map((d, pi) => (
                        <path
                          key={pi}
                          d={d}
                          stroke="currentColor"
                          strokeWidth={pi === 0 ? "2.5" : "2"}
                          strokeLinejoin={pi === 0 ? "round" : undefined}
                          strokeLinecap={pi > 0 ? "round" : undefined}
                          fill="none"
                        />
                      ))}
                    </svg>
                  </div>
                </DemoLink>
              ))}
            </div>
            <DemoLink
              href={service.ctaHref}
              className="btn btn-outline"
              id="service-cta"
              note="契約後に実装"
            >
              <span className="btn-jp">{service.ctaLabel}</span>
              <span className="btn-en">{service.ctaLabelEn}</span>
            </DemoLink>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
