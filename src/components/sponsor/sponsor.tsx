import { useRef, useState } from "react";
import type { ChangeEvent, DragEvent, FormEvent } from "react";
import { ChevronDown, Send, UploadCloud, X } from "lucide-react";
import "./sponsor.css";

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/svg+xml", "image/jpeg", "image/webp"];

const SPONSOR_TYPES = [
  { value: "platinum", label: "Platinum" },
  { value: "gold", label: "Gold" },
  { value: "silver", label: "Silver" },
  { value: "community", label: "Aliado de comunidad" },
];

const initialForm = {
  nombre: "",
  apellido: "",
  empresa: "",
  email: "",
  tipo: "",
  mensaje: "",
};

export default function Sponsor() {
  const [form, setForm] = useState(initialForm);
  const [logo, setLogo] = useState<File | null>(null);
  const [logoError, setLogoError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

    
    console.log("Postulación:", form, logo);

    setSent(true);
    setForm(initialForm);
    removeLogo();
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

        <form className="rc-sponsor__form" onSubmit={handleSubmit}>
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
                required
              />
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
                required
              />
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
                required
              />
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
                required
              />
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
                required
              >
                <option value="" disabled>
                  Seleccioná un nivel de sponsoreo
                </option>
                {SPONSOR_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={18} aria-hidden="true" />
            </div>
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
            {logoError && <p className="rc-sponsor__error">{logoError}</p>}
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
            />
          </div>

          <button type="submit" className="rc-sponsor__submit">
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