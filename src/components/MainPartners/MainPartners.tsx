import "./MainParner.css";
import type { CSSProperties } from "react";

type Partner = {
  name: string;
  role: string;
  description: string;
  category: string;
  badge: string;
  url: string;
  logo: string;
  accent: string;
};

const partners: Partner[] = [
  {
    name: "Google Cloud",
    role: "Lead Cloud Partner",
    description:
      "Infraestructura global ultra-escalable, Gemini AI APIs y programas de formación profesional para developers.",
    category: "Cloud & AI",
    badge: "100% Verified",
    url: "https://cloud.google.com/",
    logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
    accent: "#e34b5b",
  },
  {
    name: "Amazon Web Services",
    role: "Infrastructure Partner",
    description:
      "Servicios de nube, arquitecturas serverless y vouchers para certificaciones oficiales para la comunidad.",
    category: "Cloud Hosting",
    badge: "Global Leader",
    url: "https://aws.amazon.com/",
    logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
    accent: "#d99552",
  },
  {
    name: "Mercado Libre",
    role: "Fintech & E-commerce",
    description:
      "El mayor ecosistema tech de Latinoamérica impulsando becas, hackathons y pasantías directas de empleo.",
    category: "Fintech Scale",
    badge: "Unicorn LATAM",
    url: "https://www.mercadolibre.com/",
    logo: "https://cdn.simpleicons.org/mercadolibre/FFE600",
    accent: "#e6cf43",
  },
];

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 8 5 4 4-7 4 7 5-4-2 11H5L3 8Z" />
      <path d="M5 22h14" />
    </svg>
  );
}

export default function MainPartner() {
  return (
    <section
      className="rc-section main-partner"
      id="main-partners"
      aria-labelledby="main-partner-title"
    >
      <div className="rc-container">
        <header className="main-partner__header">
          <span className="main-partner__tier-icon">
            <CrownIcon />
          </span>

          <div className="main-partner__heading-content">
            <div className="main-partner__heading-line">
              <h2 id="main-partner-title">Main Partners</h2>
              <span className="main-partner__tier-label">Tier Diamante</span>
            </div>

            <p>
              Presencia estelar en conferencias, stands experienciales y becas
              formativas.
            </p>
          </div>
        </header>

        <div className="main-partner__grid">
          {partners.map((partner) => (
            <a
              className="main-partner__card"
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              key={partner.name}
              style={
                {
                  "--partner-accent": partner.accent,
                } as CSSProperties & { "--partner-accent": string }
              }
              aria-label={`${partner.name}: visitar el sitio oficial, se abre en una pestaña nueva`}
            >
              <div className="main-partner__card-top">
                <span className="main-partner__role">{partner.role}</span>
                <span className="main-partner__link-icon" aria-hidden="true">
                  ↗
                </span>
              </div>

              <span className="main-partner__logo-box">
                <img src={partner.logo} alt="" loading="lazy" />
              </span>

              <h3 className="main-partner__name">{partner.name}</h3>

              <p className="main-partner__description">
                {partner.description}
              </p>

              <div className="main-partner__footer">
                <span className="main-partner__category">
                  {partner.category}
                </span>
                <span className="main-partner__badge">{partner.badge}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}