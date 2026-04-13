import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ConceptSection({ company }: { company: CompanyData }) {
  const { concept, name } = company;

  const sectionLabel = concept.sectionLabel.replace("[莨夂､ｾ蜷江", name);
  const ctaLabel = concept.ctaLabel.replace("[莨夂､ｾ蜷江", name);

  return (
    <section className="section concept" id="concept">
      <div className="container">
        <div className="section-grid concept-grid">
          <ScrollReveal className="concept-text">
            <div className="section-header">
              <h2 className="section-title-en">CONCEPT</h2>
              <p className="section-title-jp">{sectionLabel}</p>
            </div>
            <div className="section-divider"></div>
            <h3 className="concept-headline">
              {concept.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h3>
            {concept.body.map((p, i) => (
              <p className="concept-body" key={i}>
                {p}
              </p>
            ))}
            <DemoLink
              href={concept.ctaHref}
              className="btn btn-primary"
              id="concept-cta"
              note="契約後に実装"
            >
              <span className="btn-jp">{ctaLabel}</span>
              <span className="btn-en">{concept.ctaLabelEn}</span>
            </DemoLink>
          </ScrollReveal>
          <ScrollReveal className="concept-image">
            <img src={concept.image} alt={concept.imageAlt} loading="lazy" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
