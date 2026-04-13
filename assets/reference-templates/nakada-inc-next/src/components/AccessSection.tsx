import type { CompanyData } from "@/data/company";
import { DemoLink } from "@/components/DemoLink";
import { ScrollReveal } from "@/components/ScrollReveal";

function ContactCard({ company }: { company: CompanyData }) {
  const primary = company.access.model;
  const office = company.access.hq;

  return (
    <div className="access-card">
      <div className="access-card-block">
        <p className="access-card-label">所在地</p>
        <p className="access-card-value">
          {office.postalCode ? `〒${office.postalCode} ` : ""}
          {office.address}
        </p>
      </div>
      <div className="access-card-grid">
        {primary.tel ? (
          <div>
            <p className="access-card-label">TEL</p>
            <a href={`tel:${primary.tel}`} className="access-card-link">
              {primary.tel}
            </a>
          </div>
        ) : null}
        {office.fax ? (
          <div>
            <p className="access-card-label">FAX</p>
            <p className="access-card-value">{office.fax}</p>
          </div>
        ) : null}
        {primary.email ? (
          <div>
            <p className="access-card-label">MAIL</p>
            <a href={`mailto:${primary.email}`} className="access-card-link">
              {primary.email}
            </a>
          </div>
        ) : null}
      </div>
      <div className="access-card-actions">
        <DemoLink
          href={office.mapLink}
          className="access-action access-action-secondary"
          note="契約後に実装"
        >
          地図を開く
        </DemoLink>
        <DemoLink
          href={primary.mapLink}
          className="access-action"
          note="契約後に実装"
        >
          お問い合わせフォーム
        </DemoLink>
      </div>
    </div>
  );
}

export function AccessSection({ company }: { company: CompanyData }) {
  const { access } = company;

  return (
    <section className="section access" id="access">
      <div className="container">
        <div className="section-grid access-grid">
          <ScrollReveal className="access-map">
            {access.hq.mapEmbed ? (
              <iframe
                src={access.hq.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            ) : (
              <div className="map-placeholder" id="map-placeholder">
                <p>
                  Google Map
                  <br />
                  <small>Google Maps の埋め込みURLを設定すると表示されます</small>
                </p>
              </div>
            )}
          </ScrollReveal>
          <ScrollReveal className="access-info">
            <div className="section-header">
              <h2 className="section-title-en">ACCESS</h2>
              <p className="section-title-jp">アクセス</p>
            </div>
            <div className="section-divider"></div>
            <p className="access-intro">
              会社情報と連絡先をひとつにまとめて確認できるようにしています。
            </p>
            <ContactCard company={company} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
