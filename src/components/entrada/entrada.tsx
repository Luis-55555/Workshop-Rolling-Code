import { useEffect, useState } from "react";
import "./entrada.css";

type Ticket = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge: string;
  note: string;
  perks: string[];
  highlighted?: boolean;
};

const tickets: Ticket[] = [
  {
    id: "early",
    name: "Early Bird",
    price: 25000,
    oldPrice: 35000,
    badge: "Quedan 39",
    note: "Presencial · precio especial hasta el 31/10",
    highlighted: true,
    perks: [
      "Acceso a las 10 charlas",
      "Kit de stickers Rolling Code",
      "Certificado de asistencia",
      "Coffee break y networking con los speakers",
      "Grabación de todas las charlas",
    ],
  },
  {
    id: "general",
    name: "General",
    price: 35000,
    badge: "Desde el 1/11",
    note: "Presencial · precio regular",
    perks: [
      "Acceso a las 10 charlas",
      "Certificado de asistencia",
      "Coffee break y networking con los speakers",
      "Grabación de todas las charlas",
    ],
  },
  {
    id: "virtual",
    name: "Virtual",
    price: 15000,
    badge: "Desde donde estés",
    note: "Transmisión en vivo",
    perks: [
      "Transmisión en vivo de las 10 charlas",
      "Chat para hacer preguntas a los speakers",
      "Certificado de asistencia",
      "Grabación disponible por 30 días",
    ],
  },
];

const DEADLINE = new Date("2026-10-31T23:59:59-03:00");

const formatPrice = (n: number) =>
  "$" + new Intl.NumberFormat("es-AR").format(n);

const pad = (n: number) => String(n).padStart(2, "0");

function useCountdown(target: Date) {
  const calc = () => Math.max(0, target.getTime() - Date.now());
  const [ms, setMs] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setMs(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return {
    dias: pad(Math.floor(ms / 86400000)),
    horas: pad(Math.floor(ms / 3600000) % 24),
    min: pad(Math.floor(ms / 60000) % 60),
  };
}

export default function Entrada() {
  const { dias, horas, min } = useCountdown(DEADLINE);

  const timer = [
    { valor: dias, etiqueta: "días" },
    { valor: horas, etiqueta: "horas" },
    { valor: min, etiqueta: "min" },
  ];

  return (
    <section className="rc-entrada" id="entradas">
      <div className="rc-container">
        <span className="rc-entrada__label">Entradas</span>
        <h2 className="rc-entrada__title">
          Asegurá tu lugar antes de que suba el precio
        </h2>

        {/* Contador */}
        <div className="rc-entrada__countdown">
          <div className="rc-entrada__countdown-text">
            <span className="rc-entrada__label">Early Bird</span>
            <h3>El precio especial termina el 31/10</h3>
            <p className="rc-entrada__small">
              Después la entrada pasa de $25.000 a $35.000.
            </p>
          </div>

          <div className="rc-entrada__time">
            {timer.map((t) => (
              <div key={t.etiqueta} className="rc-entrada__time-box">
                <strong>{t.valor}</strong>
                <span>{t.etiqueta}</span>
              </div>
            ))}
          </div>

          <div className="rc-entrada__progress">
            <p className="rc-entrada__small">
              Quedan 39 de 60 Early Bird · 63% vendidas
            </p>
            <div className="rc-entrada__bar">
              <span style={{ width: "63%" }} />
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="rc-entrada__cards">
          {tickets.map((t) => (
            <article
              key={t.id}
              className={`rc-entrada__card ${
                t.highlighted ? "rc-entrada__card--red" : ""
              } ${t.id === "virtual" ? "rc-entrada__card--wide" : ""}`}
            >
              <header className="rc-entrada__card-head">
                <h3>{t.name}</h3>
                <span className="rc-entrada__chip">{t.badge}</span>
              </header>

              <p className="rc-entrada__price">
                {formatPrice(t.price)}
                {t.oldPrice && (
                  <s className="rc-entrada__old">{formatPrice(t.oldPrice)}</s>
                )}
              </p>
              <p className="rc-entrada__small">{t.note}</p>

              <ul className="rc-entrada__perks">
                {t.perks.map((p) => (
                  <li key={p}>
                    <span aria-hidden="true">✓</span> {p}
                  </li>
                ))}
              </ul>

              <button className="rc-entrada__btn" type="button">
                Comprar entrada
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}