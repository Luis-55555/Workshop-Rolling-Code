import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import QRCode from "qrcode";
import "./TicketSection.css";

const tickets = [
  {
    id: "early",
    name: "Early Bird",
    description: "Presencial • hasta el 31/10",
    price: 25000,
  },
  {
    id: "general",
    name: "General",
    description: "Presencial • desde el 1/11",
    price: 35000,
  },
  {
    id: "virtual",
    name: "Virtual",
    description: "Transmisión en vivo y grabación",
    price: 15000,
  },
];

const EVENT_NAME = "Workshop Rolling Code School";
const EVENT_PLACE = "Gral. Paz 576, Entrepiso, San Miguel de Tucumán";
const EVENT_DATE_LABEL = "Jueves 19/11 • 18:00hs";

const formatPrice = (price: number) => `$${price.toLocaleString("es-AR")}`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type BuyerData = {
  name: string;
  email: string;
  doc: string;
};

type CardData = {
  number: string;
  expiry: string;
  cvv: string;
  name: string;
};

const initialBuyer: BuyerData = { name: "", email: "", doc: "" };
const initialCard: CardData = { number: "", expiry: "", cvv: "", name: "" };

const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();

const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const generateOrderId = () =>
  `RC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

type CardBrand = "visa" | "mastercard" | "amex" | "discover";

const detectCardBrand = (number: string): CardBrand | null => {
  const digits = number.replace(/\s/g, "");
  if (!digits) return null;
  if (/^4/.test(digits)) return "visa";
  if (/^(5[1-5]|2[2-7])/.test(digits)) return "mastercard";
  if (/^3[47]/.test(digits)) return "amex";
  if (/^6(011|5)/.test(digits)) return "discover";
  return null;
};

const CARD_BRAND_LABEL: Record<CardBrand, string> = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  discover: "Discover",
};

function CardBrandIcon({ brand }: { brand: CardBrand }) {
  if (brand === "visa") {
    return (
      <span className="card-brand card-brand--visa" aria-hidden="true">
        VISA
      </span>
    );
  }
  if (brand === "mastercard") {
    return (
      <span className="card-brand card-brand--mastercard" aria-hidden="true">
        <span />
        <span />
      </span>
    );
  }
  if (brand === "amex") {
    return (
      <span className="card-brand card-brand--amex" aria-hidden="true">
        AMEX
      </span>
    );
  }
  return (
    <span className="card-brand card-brand--discover" aria-hidden="true">
      Discover
    </span>
  );
}

function TicketSection() {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);

  const [buyer, setBuyer] = useState(initialBuyer);
  const [buyerErrors, setBuyerErrors] = useState<Partial<BuyerData>>({});

  const [card, setCard] = useState(initialCard);
  const [cardErrors, setCardErrors] = useState<Partial<CardData>>({});

  const [processing, setProcessing] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");

  const qrImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const onSelect = (e: Event) => {
      const index = tickets.findIndex(
        (t) => t.id === (e as CustomEvent<string>).detail
      );
      if (index === -1) return;
      setSelectedTicket(index);
      setStep(1);
    };
    window.addEventListener("select-ticket", onSelect);
    return () => window.removeEventListener("select-ticket", onSelect);
  }, []);

  const cardBrand = detectCardBrand(card.number);

  const ticket = tickets[selectedTicket];
  const subtotal = ticket.price * quantity;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;

  const handleBuyerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBuyer((current) => ({ ...current, [name]: value }));
    setBuyerErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const next =
      name === "number"
        ? formatCardNumber(value)
        : name === "expiry"
          ? formatExpiry(value)
          : name === "cvv"
            ? value.replace(/\D/g, "").slice(0, 4)
            : value;
    setCard((current) => ({ ...current, [name]: next }));
    setCardErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validateBuyer = () => {
    const errors: Partial<BuyerData> = {};
    if (buyer.name.trim().length < 3) errors.name = "Ingresá tu nombre completo.";
    if (!EMAIL_RE.test(buyer.email.trim()))
      errors.email = "Ingresá un email válido.";
    if (buyer.doc.trim().length < 6) errors.doc = "Ingresá un documento válido.";
    setBuyerErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateCard = () => {
    const errors: Partial<CardData> = {};
    const digits = card.number.replace(/\s/g, "");
    if (digits.length !== 16) errors.number = "La tarjeta debe tener 16 dígitos.";
    if (!/^\d{2}\/\d{2}$/.test(card.expiry) || Number(card.expiry.slice(0, 2)) > 12)
      errors.expiry = "Vencimiento inválido (MM/AA).";
    if (card.cvv.length < 3) errors.cvv = "CVV inválido.";
    if (card.name.trim().length < 3) errors.name = "Ingresá el nombre en la tarjeta.";
    setCardErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const goBack = () => setStep((current) => Math.max(1, current - 1));

  const startOver = () => {
    setStep(1);
    setBuyer(initialBuyer);
    setCard(initialCard);
    setBuyerErrors({});
    setCardErrors({});
    setQrDataUrl("");
    setOrderId("");
  };

  const handleContinue = async () => {
    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!validateBuyer()) return;
      setStep(3);
      return;
    }

    if (step === 3) {
      if (!validateCard()) return;
      setProcessing(true);
      const id = generateOrderId();
      await new Promise((resolve) => setTimeout(resolve, 900));
      try {
        const qr = await QRCode.toDataURL(
          `ROLLINGCODE|${id}|${ticket.name}|x${quantity}`,
          { margin: 1, width: 320, color: { dark: "#0b0b0c", light: "#ffffff" } }
        );
        setQrDataUrl(qr);
      } catch {
        setQrDataUrl("");
      }
      setOrderId(id);
      setProcessing(false);
      setStep(4);
      return;
    }

    startOver();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleContinue();
  };

  const downloadTicket = async () => {
    const canvas = document.createElement("canvas");
    const width = 1000;
    const height = 380;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stubX = width - 260;

    // Fondo principal
    ctx.fillStyle = "#111113";
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, 28);
    ctx.fill();

    // Franja superior
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "#e0202a");
    gradient.addColorStop(1, "#6e070c");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 0, width, 10, [28, 28, 0, 0]);
    ctx.fill();

    // Texto principal
    ctx.fillStyle = "#e0202a";
    ctx.font = "800 15px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("ENTRADA CONFIRMADA", 44, 56);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 34px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(EVENT_NAME, 44, 100);

    ctx.fillStyle = "#d4d4d8";
    ctx.font = "600 16px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(EVENT_DATE_LABEL, 44, 130);
    ctx.fillText(EVENT_PLACE, 44, 152);

    ctx.fillStyle = "#a1a1aa";
    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("TITULAR", 44, 210);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(buyer.name || "—", 44, 234);

    ctx.fillStyle = "#a1a1aa";
    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("ENTRADA", 44, 274);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(`${ticket.name} × ${quantity}`, 44, 298);

    ctx.fillStyle = "#a1a1aa";
    ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("CÓDIGO DE ORDEN", 44, 338);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 18px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(orderId, 44, 362);

    // Línea punteada (talón)
    ctx.strokeStyle = "#2c2c31";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(stubX, 20);
    ctx.lineTo(stubX, height - 20);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#0b0b0c";
    ctx.beginPath();
    ctx.arc(stubX, 0, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(stubX, height, 18, 0, Math.PI * 2);
    ctx.fill();

    // QR
    if (qrImageRef.current) {
      const qrSize = 170;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.roundRect(stubX + 46, 40, qrSize, qrSize, 12);
      ctx.fill();
      ctx.drawImage(qrImageRef.current, stubX + 46, 40, qrSize, qrSize);
    }

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 14px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Presentar en acreditación", stubX + 46 + 85, 240);
    ctx.font = "700 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#a1a1aa";
    ctx.fillText(orderId, stubX + 46 + 85, 260);
    ctx.textAlign = "left";

    const link = document.createElement("a");
    link.download = `entrada-${orderId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const downloadBadge = async () => {
    const width = 480;
    const height = 680;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Tarjeta de fondo
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, 28);
    ctx.fill();

    // Agujero para la lanyard
    ctx.fillStyle = "#0b0b0c";
    ctx.beginPath();
    ctx.roundRect(width / 2 - 36, 22, 72, 14, 7);
    ctx.fill();

    // Cabecera
    const gradient = ctx.createLinearGradient(0, 56, width, 200);
    gradient.addColorStop(0, "#e0202a");
    gradient.addColorStop(1, "#6e070c");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(0, 56, width, 150, [28, 28, 0, 0]);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.font = "800 20px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText("ROLLING CODE SCHOOL", width / 2, 110);
    ctx.font = "600 14px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(EVENT_DATE_LABEL, width / 2, 140);
    ctx.fillText(EVENT_PLACE, width / 2, 162);

    // Nombre del titular
    ctx.fillStyle = "#0b0b0c";
    ctx.font = "800 32px 'Plus Jakarta Sans', sans-serif";
    const nameLines = (buyer.name || "—").split(" ");
    const firstLine = nameLines.slice(0, Math.ceil(nameLines.length / 2)).join(" ");
    const secondLine = nameLines.slice(Math.ceil(nameLines.length / 2)).join(" ");
    ctx.fillText(firstLine, width / 2, 260);
    if (secondLine) ctx.fillText(secondLine, width / 2, 300);

    // Rol / tipo de entrada
    const badgeY = secondLine ? 330 : 300;
    ctx.fillStyle = "#f5f5f7";
    ctx.beginPath();
    ctx.roundRect(width / 2 - 90, badgeY, 180, 34, 999);
    ctx.fill();
    ctx.fillStyle = "#e0202a";
    ctx.font = "800 13px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(`ASISTENTE · ${ticket.name.toUpperCase()}`, width / 2, badgeY + 22);

    // QR
    if (qrImageRef.current) {
      const qrSize = 190;
      const qrY = badgeY + 56;
      ctx.drawImage(qrImageRef.current, width / 2 - qrSize / 2, qrY, qrSize, qrSize);

      ctx.fillStyle = "#71717a";
      ctx.font = "700 13px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText(orderId, width / 2, qrY + qrSize + 28);
      ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("Escaneá para acreditarte", width / 2, qrY + qrSize + 48);
    }

    ctx.textAlign = "left";

    const link = document.createElement("a");
    link.download = `gafete-${orderId}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const continueLabel =
    step === 1
      ? "Continuar"
      : step === 2
        ? "Continuar"
        : step === 3
          ? processing
            ? "Procesando…"
            : "Confirmar pago"
          : "Hacer otra compra";

  return (
    <section className="ticket-section" id="checkout">
      <div className="ticket-checkout-card">
        <header className="ticket-main-header">
          <div className="ticket-heading">
            <span className="ticket-secure-label">COMPRA SEGURA</span>
            <h2>Finalizá tu compra</h2>
          </div>
          <nav className="ticket-steps" aria-label="Pasos de compra">
            {["Entrada", "Datos", "Pago", "Listo"].map((label, index) => {
              const stepNumber = index + 1;
              return (
                <div
                  className={`ticket-step ${step === stepNumber ? "ticket-step-active" : ""} ${step > stepNumber ? "ticket-step-complete" : ""}`}
                  key={label}
                  aria-current={step === stepNumber ? "step" : undefined}
                >
                  <span>{stepNumber}</span>
                  <span>{label}</span>
                </div>
              );
            })}
          </nav>
        </header>

        <div
          className={`ticket-content-grid ${step === 4 ? "ticket-content-grid--done" : ""}`}
        >
          <form
            className="ticket-selection-card"
            onSubmit={handleSubmit}
            noValidate
          >
            {step === 1 && (
              <>
                <h3>Elegí tu entrada</h3>
                <div className="ticket-options">
                  {tickets.map((option, index) => (
                    <button
                      className={`ticket-option ${selectedTicket === index ? "ticket-option-selected" : ""}`}
                      type="button"
                      key={option.name}
                      onClick={() => setSelectedTicket(index)}
                      aria-pressed={selectedTicket === index}
                    >
                      <span className="ticket-option-details">
                        <span className="ticket-option-name">
                          {option.name}
                        </span>
                        <span className="ticket-option-description">
                          {option.description}
                        </span>
                      </span>
                      <span className="ticket-option-price">
                        {formatPrice(option.price)}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="ticket-quantity-row">
                  <span className="ticket-quantity-label">Cantidad</span>
                  <div className="ticket-quantity-control">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((current) => Math.max(1, current - 1))
                      }
                      aria-label="Disminuir cantidad"
                    >
                      {" "}
                      −
                    </button>
                    <span aria-live="polite">{quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((current) => Math.min(10, current + 1))
                      }
                      disabled={quantity >= 10}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3>Tus datos</h3>
                <div className="ticket-field">
                  <label htmlFor="buyer-name">Nombre completo</label>
                  <input
                    id="buyer-name"
                    name="name"
                    type="text"
                    placeholder="Ej. Ana Pérez"
                    value={buyer.name}
                    onChange={handleBuyerChange}
                    aria-invalid={!!buyerErrors.name}
                  />
                  {buyerErrors.name && (
                    <p className="ticket-field-error">{buyerErrors.name}</p>
                  )}
                </div>
                <div className="ticket-field">
                  <label htmlFor="buyer-email">Email</label>
                  <input
                    id="buyer-email"
                    name="email"
                    type="email"
                    placeholder="ana@email.com"
                    value={buyer.email}
                    onChange={handleBuyerChange}
                    aria-invalid={!!buyerErrors.email}
                  />
                  {buyerErrors.email && (
                    <p className="ticket-field-error">{buyerErrors.email}</p>
                  )}
                </div>
                <div className="ticket-field">
                  <label htmlFor="buyer-doc">DNI</label>
                  <input
                    id="buyer-doc"
                    name="doc"
                    type="text"
                    placeholder="30123456"
                    value={buyer.doc}
                    onChange={handleBuyerChange}
                    aria-invalid={!!buyerErrors.doc}
                  />
                  {buyerErrors.doc && (
                    <p className="ticket-field-error">{buyerErrors.doc}</p>
                  )}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h3>Pago</h3>
                <div className="ticket-field">
                  <label htmlFor="card-number">Número de tarjeta</label>
                  <div className="ticket-card-input">
                    <input
                      id="card-number"
                      name="number"
                      type="text"
                      inputMode="numeric"
                      placeholder="4242 4242 4242 4242"
                      value={card.number}
                      onChange={handleCardChange}
                      aria-invalid={!!cardErrors.number}
                    />
                    {cardBrand && (
                      <span className="ticket-card-brand-wrap">
                        <CardBrandIcon brand={cardBrand} />
                        <span className="sr-only">
                          {CARD_BRAND_LABEL[cardBrand]}
                        </span>
                      </span>
                    )}
                  </div>
                  {cardErrors.number && (
                    <p className="ticket-field-error">{cardErrors.number}</p>
                  )}
                </div>
                <div className="ticket-field-row">
                  <div className="ticket-field">
                    <label htmlFor="card-expiry">Vencimiento</label>
                    <input
                      id="card-expiry"
                      name="expiry"
                      type="text"
                      inputMode="numeric"
                      placeholder="MM/AA"
                      value={card.expiry}
                      onChange={handleCardChange}
                      aria-invalid={!!cardErrors.expiry}
                    />
                    {cardErrors.expiry && (
                      <p className="ticket-field-error">{cardErrors.expiry}</p>
                    )}
                  </div>
                  <div className="ticket-field">
                    <label htmlFor="card-cvv">CVV</label>
                    <input
                      id="card-cvv"
                      name="cvv"
                      type="text"
                      inputMode="numeric"
                      placeholder="123"
                      value={card.cvv}
                      onChange={handleCardChange}
                      aria-invalid={!!cardErrors.cvv}
                    />
                    {cardErrors.cvv && (
                      <p className="ticket-field-error">{cardErrors.cvv}</p>
                    )}
                  </div>
                </div>
                <div className="ticket-field">
                  <label htmlFor="card-name">Nombre en la tarjeta</label>
                  <input
                    id="card-name"
                    name="name"
                    type="text"
                    placeholder="ANA PEREZ"
                    value={card.name}
                    onChange={handleCardChange}
                    aria-invalid={!!cardErrors.name}
                  />
                  {cardErrors.name && (
                    <p className="ticket-field-error">{cardErrors.name}</p>
                  )}
                </div>
              </>
            )}

            {step === 4 && (
              <div className="ticket-done">
                <span className="ticket-done-check" aria-hidden="true">
                  ✓
                </span>
                <h3>¡Listo! Tu entrada está confirmada</h3>
                <p className="ticket-done-lead">
                  Guardá tu entrada o descargala para presentarla en
                  acreditación.
                </p>

                <div className="ticket-deliverables">
                  <div className="ticket-deliverable">
                    <div className="ticket-visual">
                      <div className="ticket-visual-main">
                        <span className="ticket-visual-eyebrow">
                          ENTRADA CONFIRMADA
                        </span>
                        <strong className="ticket-visual-event">
                          {EVENT_NAME}
                        </strong>
                        <span className="ticket-visual-when">
                          {EVENT_DATE_LABEL}
                        </span>
                        <span className="ticket-visual-where">
                          {EVENT_PLACE}
                        </span>

                        <div className="ticket-visual-rows">
                          <div>
                            <span>Titular</span>
                            <strong>{buyer.name}</strong>
                          </div>
                          <div>
                            <span>Entrada</span>
                            <strong>
                              {ticket.name} × {quantity}
                            </strong>
                          </div>
                          <div>
                            <span>Código de orden</span>
                            <strong>{orderId}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="ticket-visual-stub">
                        {qrDataUrl && (
                          <img
                            ref={qrImageRef}
                            src={qrDataUrl}
                            alt={`Código QR de la entrada ${orderId}`}
                            className="ticket-visual-qr"
                          />
                        )}
                        <span>Presentar en acreditación</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="ticket-download-button"
                      onClick={downloadTicket}
                      disabled={!qrDataUrl}
                    >
                      Descargar entrada
                    </button>
                  </div>

                  <div className="ticket-deliverable">
                    <div className="ticket-badge">
                      <span className="ticket-badge-hole" aria-hidden="true" />
                      <div className="ticket-badge-header">
                        <strong>ROLLING CODE SCHOOL</strong>
                        <span>{EVENT_DATE_LABEL}</span>
                      </div>
                      <div className="ticket-badge-body">
                        <span className="ticket-badge-name">
                          {buyer.name}
                        </span>
                        <span className="ticket-badge-role">
                          Asistente · {ticket.name}
                        </span>
                        {qrDataUrl && (
                          <img
                            src={qrDataUrl}
                            alt={`Código QR del gafete ${orderId}`}
                            className="ticket-badge-qr"
                          />
                        )}
                        <span className="ticket-badge-order">{orderId}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ticket-download-button ticket-download-button--outline"
                      onClick={downloadBadge}
                      disabled={!qrDataUrl}
                    >
                      Descargar gafete
                    </button>
                  </div>
                </div>

                <p className="ticket-done-disclaimer">
                  También te enviamos una copia a{" "}
                  <strong>{buyer.email}</strong>. Si no la ves en unos
                  minutos, revisá spam o correo no deseado.
                </p>
              </div>
            )}

            <div className="ticket-step-actions">
              {step > 1 && step < 4 && (
                <button
                  type="button"
                  className="ticket-back-button"
                  onClick={goBack}
                >
                  Atrás
                </button>
              )}
              <button
                className="ticket-continue-button"
                type="submit"
                disabled={processing}
              >
                {continueLabel}
              </button>
            </div>

            {step === 3 && (
              <p className="ticket-payment-disclaimer">
                Pasarela de pago de ejemplo: no se procesan pagos ni se
                guardan datos.
              </p>
            )}
          </form>

          {step < 4 && (
            <aside className="ticket-order-card">
              <span className="ticket-order-eyebrow">TU PEDIDO</span>
              <h3>{EVENT_NAME}</h3>
              <p className="ticket-event-details">
                {EVENT_DATE_LABEL} • {EVENT_PLACE}
              </p>
              <div className="ticket-order-divider" />
              <div className="ticket-order-row">
                <span>
                  {quantity} {quantity === 1 ? "entrada" : "entradas"}{" "}
                  {ticket.name}
                </span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="ticket-order-row">
                <span>Cargo por servicio (5%)</span>
                <span>{formatPrice(serviceFee)}</span>
              </div>
              <div className="ticket-order-divider" />
              <div className="ticket-order-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <p className="ticket-protection-note">
                <span className="ticket-wallet" aria-hidden="true">
                  ▰
                </span>
                <span>
                  <strong>Pago protegido.</strong> Recibís la entrada por
                  email.
                </span>
              </p>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

export default TicketSection;
