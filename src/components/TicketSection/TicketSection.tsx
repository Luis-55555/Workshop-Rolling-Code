import { useState } from "react";
import "./TicketSection.css";

const tickets = [
  {
    name: "Early Bird",
    description: "Presencial • hasta el 31/10",
    price: 25000,
  },
  {
    name: "General",
    description: "Presencial • desde el 1/11",
    price: 35000,
  },
  {
    name: "Virtual",
    description: "Transmisión en vivo y grabación",
    price: 15000,
  },
];

const formatPrice = (price: number) =>
  `$${price.toLocaleString("es-AR")}`;

function TicketSection() {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState(1);

  const ticket = tickets[selectedTicket];
  const subtotal = ticket.price * quantity;
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee;

  const handleContinue = () => {
    if (step < 4) {
      setStep((current) => current + 1);
    } else {
      setStep(1);
      alert("Esta es una demostración. No se realizó ningún pago.");
    }
  };

return (
<section className="ticket-section" id="checkout">
<div className="ticket-checkout-card">
    <header className="ticket-main-header">
    <div className="ticket-heading">
    <span className="ticket-secure-label">COMPRA SEGURA</span>
    <h2>Finalizá tu compra</h2>
    </div>
<nav className="ticket-steps" aria-label="Pasos de compra">
     {["Entrada", "Datos", "Pago", "Listo"].map(
     (label, index) => {
    const stepNumber = index + 1;

return (
<div className={`ticket-step ${step === stepNumber ? "ticket-step-active" : "" } ${step > stepNumber ? "ticket-step-complete" : ""}`} key={label} aria-current={step === stepNumber ? "step" : undefined}>
    <span>{stepNumber}</span>
    <span>{label}</span>
</div>
        );
     }
    )}
    </nav>
 </header>

<div className="ticket-content-grid">
<div className="ticket-selection-card">
    <h3>Elegí tu entrada</h3>
    <div className="ticket-options">
    {tickets.map((option, index) => (
    <button className={`ticket-option ${selectedTicket === index ? "ticket-option-selected" : ""}`} type="button" key={option.name} onClick={() => setSelectedTicket(index)} aria-pressed={selectedTicket === index}>
    <span className="ticket-option-details">
    <span className="ticket-option-name">{option.name}</span>
    <span className="ticket-option-description">{option.description}</span>
    </span>
<span className="ticket-option-price">{formatPrice(option.price)}</span>
    </button>
    ))}
    </div>
<div className="ticket-quantity-row">
   <span className="ticket-quantity-label">Cantidad</span>
   <div className="ticket-quantity-control">
   <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Disminuir cantidad"> −</button>
   <span aria-live="polite">{quantity}</span>
   <button type="button" onClick={() => setQuantity((current) => Math.min(10, current + 1))} disabled={quantity >= 10} aria-label="Aumentar cantidad">+</button>
</div>
</div>
<button className="ticket-continue-button" type="button" onClick={handleContinue}>Continuar</button>
 <p className="ticket-payment-disclaimer">
     Pasarela de pago de ejemplo: no se procesan pagos ni se guardan
     datos.
</p>
</div>
<aside className="ticket-order-card">
   <span className="ticket-order-eyebrow">TU PEDIDO</span>
   <h3>Workshop Rolling Code School</h3>
   <p className="ticket-event-details">Jueves 19/11 • 18:00hs • Gral. Paz 576</p>
   <div className="ticket-order-divider" />
   <div className="ticket-order-row">
   <span>{quantity} {quantity === 1 ? "entrada" : "entradas"}{" "}{ticket.name}</span>
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
    <span className="ticket-wallet" aria-hidden="true">▰</span>
    <span>
        <strong>Pago protegido.</strong> Recibís la entrada por email.
    </span>
</p>
        </aside>
       </div>
      </div>
    </section>
  );
}

export default TicketSection;