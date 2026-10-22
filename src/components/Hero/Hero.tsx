import './Hero.css';
const CalendarIcon = () => (
  <svg
    className="hero__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
    <path d="M8 2.5v4M16 2.5v4M3 10h18" />
  </svg>
);

const PinIcon = () => (
  <svg
    className="hero__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </svg>
);

const TicketIcon = () => (
  <svg
    className="hero__icon"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z" />
    <path d="M14 6v2M14 11v2M14 16v2" />
  </svg>
);

function Hero () {
return (
<section className="hero" id="inicio">
 <div className="hero__block">
 <div className="container">
 <div className="row g-4 align-items-center">
<div className="col-lg-7">
<p className="hero__label">
<span className="hero__label-light"> Workshop </span> Entradas
 limitadas
</p>

<h1 className="hero__title">
<span>¿Por dónde</span>
<span>empiezo a</span>
<span className="hero__title-dark">programar?</span>
</h1>

<p className="hero__text">
 Una tarde con diez speakers de Rolling Code School para ordenar
 tus primeros pasos: qué aprender, cómo practicar y cómo mostrar
 lo que sabés.
</p>

<div className="d-flex flex-wrap gap-3">
<a href="#checkout" className="btn hero__btn hero__btn--dark">Comprar entrada</a>
<a href="#agenda" className="btn hero__btn hero__btn--outline"> Ver agenda</a>
</div>
</div>
<div className="col-lg-5">
<div className="hero__card">
<div className="hero__row">
<CalendarIcon />
    <div>
    <p className="hero__row-title hero__row-title--date">JUE 19/11</p>
    <p className="hero__time"> 18.00 hs</p>
</div>
</div>
<div className="hero__row">
<PinIcon />
    <div>
    <p className="hero__row-title">Rolling Code School</p>
    <p className="hero__small">Gral. Paz 576, Entrepiso</p>
</div>
</div>
<div className="hero__row hero__row--last">
<TicketIcon />
<div>
    <p className="hero__row-title">Entradas desde $15.000</p>
    <p className="hero__small">Early Bird hasta el 31/10</p>
</div>
</div>
<div className="d-flex flex-wrap gap-2">
    <span className="hero__chip">Presencial</span>
    <span className="hero__chip">Virtual</span>
    <span className="hero__chip hero__chip--red">Cupos limitados</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
)
}
export default Hero;