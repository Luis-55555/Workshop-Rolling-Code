import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";
import logo from "../../assets/Logo/rclogo-dark-bad41e62.png";

const links = [
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Cómo llegar", href: "#como-llegar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="rc-navbar">
      <div className="rc-container rc-navbar__inner">
        <a
          href="/"
          className="rc-navbar__logo"
          aria-label="Rolling Code School, inicio"
        >
          <img src={logo} alt="Rolling Code School" />
        </a>

        <button
          type="button"
          className="rc-navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          id="menu-principal"
          className={`rc-navbar__nav ${open ? "is-open" : ""}`}
          aria-label="Principal"
        >
          <ul className="rc-navbar__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#tickets" className="rc-navbar__cta" onClick={close}>
            Comprar entrada
          </a>
        </nav>
      </div>
    </header>
  );
}