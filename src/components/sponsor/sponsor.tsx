import { useRef, useState } from "react";
import type {
  ChangeEvent,
  CSSProperties,
  DragEvent,
  FormEvent,
} from "react";
import { ChevronDown, Send, UploadCloud, X } from "lucide-react";
import "./sponsor.css";

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/svg+xml", "image/jpeg", "image/webp"];

type SponsorTier = {
  value: string;
  label: string;
  price: string;
  pitch: string;
  accent: string;
  benefits: string[];
};

const SPONSOR_TIERS: SponsorTier[] = [
  {
    value: "diamante",
    label: "Diamante",
    price: "A cotizar",
    accent: "#e34b5b",
    pitch: "Máxima visibilidad, de punta a punta del evento.",
    benefits: [
      "Logo destacado en el escenario y en toda la cartelería",
      "Stand propio en el lugar del evento",
      "5 entradas para tu equipo",
      "Mención en redes antes, durante y después del evento",
      "Acceso prioritario a la base de talentos IT",
    ],
  },
  {
    value: "gold",
    label: "Gold",
    price: "A cotizar",
    accent: "#e6b325",
    pitch: "Presencia fuerte en la página y en las charlas.",
    benefits: [
      "Logo en la página del evento y en la apertura",
      "3 entradas para tu equipo",
      "Mención en redes sociales",
      "Espacio para dejar material en el registro",
    ],
  },
  {
    value: "bronze",
    label: "Bronze",
    price: "A cotizar",
    accent: "#c9743a",
    pitch: "Presencia en la página, ideal para empezar.",
    benefits: [
      "Logo en la página del evento",
      "1 entrada para tu equipo",
      "Mención en redes sociales",
    ],
  },
];

const MAX_MESSAGE = 500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FREE_MAIL = /@(gmail|hotmail|outlook|yahoo|live|icloud)\./i;

const initialForm = {
  nombre: "",
  apellido: "",
  empresa: "",
  email: "",
  tipo: "",
  mensaje: "",
};

type FormErrors = Partial<Record<keyof typeof initialForm, string>>;

const validate = (f: typeof initialForm): FormErrors => {
  const errors: FormErrors = {};
  if (f.nombre.trim().length < 2) errors.nombre = "Ingresá tu nombre.";
  if (f.apellido.trim().length < 2) errors.apellido = "Ingresá tu apellido.";
  if (f.empresa.trim().length < 2) errors.empresa = "Ingresá el nombre de la empresa.";
  const email = f.email.trim();
  if (!email) errors.email = "Ingresá tu email corporativo.";
  else if (!EMAIL_RE.test(email)) errors.email = "Ingresá un email válido.";
  else if (FREE_MAIL.test(email))
    errors.email = "Usá un email corporativo, no uno personal.";
  if (!f.tipo) errors.tipo = "Seleccioná un nivel de sponsoreo.";
  if (f.mensaje.length > MAX_MESSAGE)
    errors.mensaje = `El mensaje no puede superar los ${MAX_MESSAGE} caracteres.`;
  return errors;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p className="rc-sponsor__error" id={`${id}-error`} role="alert">
      {message}
    </p>
  );
}

export default function Sponsor() {
  const [form, setForm] = useState(initialForm);
  const [logo, setLogo] = useState<File | null>(null);
  const [logoError, setLogoError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [openTier, setOpenTier] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const chooseTier = (value: string) => {
    setForm((current) => ({ ...current, tipo: value }));
    setErrors((current) => ({ ...current, tipo: undefined }));
    document
      .getElementById("tipo")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setSent(false);
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const selectFile = (file?: File) => {
    if (!file) return;
    if (!ALLOWED_TYPES.includes(file.type)) {
      setLogo(null);
      setLogoError("Formato no válido. Usá PNG, SVG, JPG o WEBP.");
      return;
    }
    if (file.size > MAX_SIZE) {
      setLogo(null);
      setLogoError("El archivo supera los 5 MB.");
      return;
    }
    setLogoError("");
    setLogo(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    selectFile(e.dataTransfer.files[0]);
  };

  const removeLogo = () => {
    setLogo(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0 || logoError) {
      const first = Object.keys(found)[0];
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setSubmitting(true);
    const clean = {
      ...form,
      nombre: form.nombre.trim(),
      apellido: form.apellido.trim(),
      empresa: form.empresa.trim(),
      email: form.email.trim(),
      mensaje: form.mensaje.trim(),
    };
    console.log("Postulación:", clean, logo);

    setSent(true);
    setForm(initialForm);
    removeLogo();
    setSubmitting(false);
  };

  return (
    <section className="rc-sponsor" id="sponsors">
      <div className="rc-container">
        <header className="rc-sponsor__header">
          <h2 className="rc-sponsor__title">Sumate como Sponsor</h2>
          <p className="rc-sponsor__lead">
            Conectá tu marca con más de 120 talentos IT, programadores junior,
            semi-seniors y líderes tecnológicos del norte argentino. Completá el
            formulario y nos contactaremos en menos de 24 horas hábiles.
          </p>
        </header>

        <div className="rc-sponsor__tiers">
          {SPONSOR_TIERS.map((tier) => {
            const isOpen = openTier === tier.value;
            return (
              <div
                className={`rc-sponsor__tier ${isOpen ? "is-open" : ""}`}
                key={tier.value}
                style={
                  { "--tier-accent": tier.accent } as CSSProperties & {
                    "--tier-accent": string;
                  }
                }
              >
                <button
                  type="button"
                  className="rc-sponsor__tier-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`tier-panel-${tier.value}`}
                  onClick={() => setOpenTier(isOpen ? null : tier.value)}
                >
                  <span className="rc-sponsor__tier-head">
                    <strong>{tier.label}</strong>
                    <span className="rc-sponsor__tier-pitch">
                      {tier.pitch}
                    </span>
                  </span>
                  <span className="rc-sponsor__tier-price">{tier.price}</span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="rc-sponsor__tier-chevron"
                  />
                </button>

                {isOpen && (
                  <div
                    className="rc-sponsor__tier-panel"
                    id={`tier-panel-${tier.value}`}
                  >
                    <ul>
                      {tier.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="rc-sponsor__tier-cta"
                      onClick={() => chooseTier(tier.value)}
                    >
                      Elegir {tier.label}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <form className="rc-sponsor__form" onSubmit={handleSubmit} noValidate>
          <div className="rc-sponsor__row">
            <div className="rc-sponsor__field">
              <label htmlFor="nombre">
                Nombre <span>*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ej. Martín"
                value={form.nombre}
                onChange={handleChange}
                maxLength={100}
                aria-invalid={!!errors.nombre}
                aria-describedby={errors.nombre ? "nombre-error" : undefined}
                required
              />
              <FieldError id="nombre" message={errors.nombre} />
            </div>
            <div className="rc-sponsor__field">
              <label htmlFor="apellido">
                Apellido <span>*</span>
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Ej. González"
                value={form.apellido}
                onChange={handleChange}
                maxLength={100}
                aria-invalid={!!errors.apellido}
                aria-describedby={errors.apellido ? "apellido-error" : undefined}
                required
              />
              <FieldError id="apellido" message={errors.apellido} />
            </div>
          </div>

          <div className="rc-sponsor__row">
            <div className="rc-sponsor__field">
              <label htmlFor="empresa">
                Empresa <span>*</span>
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Ej. Acme Technologies"
                value={form.empresa}
                onChange={handleChange}
                maxLength={100}
                aria-invalid={!!errors.empresa}
                aria-describedby={errors.empresa ? "empresa-error" : undefined}
                required
              />
              <FieldError id="empresa" message={errors.empresa} />
            </div>
            <div className="rc-sponsor__field">
              <label htmlFor="email">
                Email corporativo <span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="martin@acme.com"
                value={form.email}
                onChange={handleChange}
                maxLength={100}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              <FieldError id="email" message={errors.email} />
            </div>
          </div>

          <div className="rc-sponsor__field">
            <label htmlFor="tipo">
              Tipo de sponsor <span>*</span>
            </label>
            <div className="rc-sponsor__select">
              <select
                id="tipo"
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                aria-invalid={!!errors.tipo}
                aria-describedby={errors.tipo ? "tipo-error" : undefined}
                required
              >
                <option value="" disabled>
                  Seleccioná un nivel de sponsoreo
                </option>
                {SPONSOR_TIERS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} aria-hidden="true" />
            </div>
            <FieldError id="tipo" message={errors.tipo} />
          </div>

          <div className="rc-sponsor__field">
            <label htmlFor="logo">Logo de la empresa</label>
            <div
              className={`rc-sponsor__drop ${dragging ? "is-dragging" : ""}`}
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  fileRef.current?.click();
                }
              }}
            >
              <input
                ref={fileRef}
                id="logo"
                type="file"
                accept=".png,.svg,.jpg,.jpeg,.webp"
                hidden
                onChange={(e) => selectFile(e.target.files?.[0])}
              />
              <span className="rc-sponsor__drop-icon">
                <UploadCloud size={22} aria-hidden="true" />
              </span>

              {logo ? (
                <p className="rc-sponsor__file">
                  {logo.name}
                  <button
                    type="button"
                    aria-label="Quitar logo"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeLogo();
                    }}
                  >
                    <X size={16} />
                  </button>
                </p>
              ) : (
                <strong>Hacé clic para adjuntar tu logo o arrastralo aquí</strong>
              )}

              <small>
                Archivos aceptados: PNG, SVG, JPG o WEBP (Fondo transparente
                recomendado, máx. 5MB)
              </small>
            </div>
            {logoError && (
              <p className="rc-sponsor__error" role="alert">
                {logoError}
              </p>
            )}
          </div>

          <div className="rc-sponsor__field">
            <label htmlFor="mensaje">Mensaje opcional</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Contanos sobre tu empresa y por qué buscás ser Sponsor del evento"
              value={form.mensaje}
              onChange={handleChange}
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
            />
            <small className="rc-sponsor__counter">
              {form.mensaje.length}/{MAX_MESSAGE}
            </small>
            <FieldError id="mensaje" message={errors.mensaje} />
          </div>

          <button
            type="submit"
            className="rc-sponsor__submit"
            disabled={submitting}
          >
            <Send size={18} aria-hidden="true" />
            Enviar postulación de Sponsor
          </button>

          {sent && (
            <p className="rc-sponsor__success" role="status">
              ¡Gracias! Recibimos tu postulación y te contactaremos en menos de
              24 horas hábiles.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}