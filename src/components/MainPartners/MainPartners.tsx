import "./MainPartners.css";
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
    logo: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
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
    logo: "https://www.google.com/s2/favicons?domain=mercadolibre.com&sz=128",
    accent: "#e6cf43",
  },
];

type TierPartner = {
  name: string;
  role: string;
  category: string;
  url: string;
  logo: string;
};

type Tier = {
  id: string;
  label: string;
  title: string;
  description: string;
  accent: string;
  partners: TierPartner[];
};

const tiers: Tier[] = [
  {
    id: "gold",
    label: "Nivel Oro",
    title: "Gold Tier",
    description: "Líderes de producto, frameworks y transformación digital global",
    accent: "#e6b325",
    partners: [
      {
        name: "Microsoft",
        role: "Azure & Dev Tools",
        category: "Enterprise",
        url: "https://www.microsoft.com/",
        logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      },
      {
        name: "GitHub",
        role: "Open Source & Copilot",
        category: "Community",
        url: "https://github.com/",
        logo: "https://cdn.simpleicons.org/github/ffffff",
      },
      {
        name: "Globant",
        role: "Tech Reinvention",
        category: "Global Talent",
        url: "https://www.globant.com/",
        logo: "https://www.google.com/s2/favicons?domain=globant.com&sz=128",
      },
      {
        name: "Auth0",
        role: "Identity & Security",
        category: "Security",
        url: "https://auth0.com/",
        logo: "https://cdn.simpleicons.org/auth0/eb5424",
      },
      {
        name: "Vercel",
        role: "Frontend Cloud & Next",
        category: "Deployment",
        url: "https://vercel.com/",
        logo: "https://cdn.simpleicons.org/vercel/ffffff",
      },
    ],
  },
  {
    id: "bronze",
    label: "Nivel Bronce",
    title: "Bronze Tier",
    description: "Herramientas y plataformas predilectas de la comunidad de desarrolladores",
    accent: "#c9743a",
    partners: [
      {
        name: "Supabase",
        role: "Open-source DB",
        category: "",
        url: "https://supabase.com/",
        logo: "https://cdn.simpleicons.org/supabase/3ecf8e",
      },
      {
        name: "DigitalOcean",
        role: "Cloud VPS",
        category: "",
        url: "https://www.digitalocean.com/",
        logo: "https://cdn.simpleicons.org/digitalocean/0080ff",
      },
      {
        name: "Cloudflare",
        role: "Edge & DNS",
        category: "",
        url: "https://www.cloudflare.com/",
        logo: "https://cdn.simpleicons.org/cloudflare/f38020",
      },
      {
        name: "MongoDB",
        role: "Document DB",
        category: "",
        url: "https://www.mongodb.com/",
        logo: "https://cdn.simpleicons.org/mongodb/47a248",
      },
      {
        name: "Docker",
        role: "Containers",
        category: "",
        url: "https://www.docker.com/",
        logo: "https://cdn.simpleicons.org/docker/2496ed",
      },
      {
        name: "Stripe",
        role: "Payments API",
        category: "",
        url: "https://stripe.com/",
        logo: "https://cdn.simpleicons.org/stripe/635bff",
      },
      {
        name: "Postman",
        role: "API Platform",
        category: "",
        url: "https://www.postman.com/",
        logo: "https://cdn.simpleicons.org/postman/ff6c37",
      },
    ],
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

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="15" r="6" />
      <path d="m9 10-3-6M15 10l3-6M9 4h6" />
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

        {tiers.map((tier) => (
          <div
            className="main-partner__tier"
            key={tier.id}
            style={
              { "--partner-accent": tier.accent } as CSSProperties & {
                "--partner-accent": string;
              }
            }
          >
            <header className="main-partner__header main-partner__header--tier">
              <span className="main-partner__tier-icon">
                <MedalIcon />
              </span>

              <div className="main-partner__heading-content">
                <div className="main-partner__heading-line">
                  <h3>{tier.title}</h3>
                  <span className="main-partner__tier-label">
                    {tier.label}
                  </span>
                </div>

                <p>{tier.description}</p>
              </div>
            </header>

            <div
              className="main-partner__tier-grid"
              style={
                {
                  "--tier-count": tier.partners.length,
                } as CSSProperties & { "--tier-count": number }
              }
            >
              {tier.partners.map((partner) => (
                <a
                  className="main-partner__tier-card"
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={partner.name}
                  aria-label={`${partner.name}: visitar el sitio oficial, se abre en una pestaña nueva`}
                >
                  <span className="main-partner__tier-logo">
                    <img src={partner.logo} alt="" loading="lazy" />
                  </span>
                  <strong>{partner.name}</strong>
                  <span>{partner.role}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}