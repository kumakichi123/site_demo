import type { CompanyData } from "@/data/company";
import { ScrollReveal } from "@/components/ScrollReveal";

export function InfoSection({ company }: { company: CompanyData }) {
  const { news, name } = company;

  return (
    <section className="section information" id="information">
      <div className="container">
        <div className="section-header section-header--center">
          <h2 className="section-title-en">INFORMATION</h2>
          <p className="section-title-jp">{name}からのお知らせ</p>
        </div>
        <div className="section-divider section-divider--center"></div>
        <ScrollReveal as="ul" className="news-list" id="news-list">
          {news.map((item, i) => (
            <li className="news-item" key={i}>
              <span className="news-category">{item.category}</span>
              {item.date && item.dateISO ? (
                <time className="news-date" dateTime={item.dateISO}>
                  {item.date}
                </time>
              ) : null}
              <span className="news-link">{item.title}</span>
            </li>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
