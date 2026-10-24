import tomasEscuderoImg from "../../assets/speakers/speaker-01-tomas-escudero.jpg";
import francoDiazImg from "../../assets/speakers/speaker-02-franco-diaz.jpg";
import gastonImg from "../../assets/speakers/speaker-03-gaston.jpg";
import mauroImg from "../../assets/speakers/speaker-04-mauro.jpg";
import joseDiazImg from "../../assets/speakers/speaker-05-jose-diaz.jpg";
import tomasGomezImg from "../../assets/speakers/speaker-06-tomas-gomez.jpg";
import pabloBassoImg from "../../assets/speakers/speaker-07-pablo-basso.jpg";
import julianMartinImg from "../../assets/speakers/speaker-08-julian-martin.jpg";
import danielaCardozoImg from "../../assets/speakers/speaker-09-daniela-cardozo.jpg";
import andresPerloImg from "../../assets/speakers/speaker-10-andres-perlo.jpg";
import { useEffect, useRef, useState } from "react";
import "./Speakers.css";

type Speaker = {
  name: string;
  time: string;
  longDescription: string;
  learn: string[];
  audience: string;
  talk: string;
  description: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Tomas Escudero",
    longDescription:
      "Antes de escribir una línea de código hay que saber leer lo que diseñó otra persona. Tomas te muestra cómo mirar una interfaz con ojos de developer: qué es un componente, cómo se organiza el espacio y qué preguntarle al diseñador para construirlo bien a la primera.",
    learn: ["Leer un diseño en Figma sin perderte", "Entender espaciados, tipografías y jerarquía", "Qué preguntar antes de empezar a maquetar"],
    audience: "Principiantes en frontend",
    time: "21:00",
    talk: "Diseño para developers",
    description:
      "Qué mirar en una interfaz antes de escribir código y cómo leer un diseño para construirlo mejor.",
    image: tomasEscuderoImg,
  },
  {
    name: "Franco Diaz",
    longDescription:
      "Mirar tutoriales no es lo mismo que construir. Franco arma en vivo una app simple y te lleva paso a paso desde la carpeta vacía hasta algo que funciona, usando HTML, JavaScript y React.",
    learn: ["Cómo elegir una idea de proyecto chica y terminarla", "De HTML y JavaScript a tu primer componente en React", "Qué hacer cuando te trabás"],
    audience: "Quienes terminaron cursos y no saben cómo seguir",
    time: "18:40",
    talk: "De cero a tu primer proyecto",
    description:
      "Un recorrido para pasar de mirar tutoriales a terminar una app simple con HTML, JavaScript y React.",
    image: francoDiazImg,
  },
  {
    name: "Gaston",
    longDescription:
      "La IA no te reemplaza, pero sí puede acelerarte. Gaston te enseña a usar asistentes para planificar, escribir y publicar un portfolio que muestre lo que sabés hacer, sin perder tu propia voz.",
    learn: ["Cómo pedirle bien las cosas a un asistente de IA", "Estructura de un portfolio que llama la atención", "Publicarlo gratis para compartirlo en tu CV"],
    audience: "Quienes buscan su primer trabajo",
    time: "19:00",
    talk: "Armá tu portfolio con IA",
    description:
      "Cómo usar asistentes de IA para construir y publicar un portfolio que muestre lo que sabés hacer.",
    image: gastonImg,
  },
  {
    name: "Mauro",
    longDescription:
      "Git asusta hasta que entendés tres ideas. Mauro te acompaña por los comandos que vas a usar todos los días y cómo trabajar en equipo sin pisar el código de otros ni romper la rama principal.",
    learn: ["Los comandos esenciales: add, commit, push y pull", "Ramas y pull requests, paso a paso", "Cómo resolver un conflicto sin entrar en pánico"],
    audience: "Quienes empiezan a trabajar en equipo",
    time: "19:20",
    talk: "Git y GitHub sin miedo",
    description:
      "Los comandos que vas a usar todos los días y cómo trabajar en equipo sin pisar el código de otros.",
    image: mauroImg,
  },
  {
    name: "Jose Diaz",
    longDescription:
      "Detrás de cada app hay un servidor que responde. Jose explica cómo se arma una API con Node, qué hace una base de datos y cómo dar los primeros pasos de un proyecto de backend.",
    learn: ["Qué es una API y cómo se comunica con el frontend", "Rutas, peticiones y respuestas en Node", "El rol de la base de datos en el proyecto"],
    audience: "Quienes quieren pasar del frontend al backend",
    time: "19:40",
    talk: "Tu primer backend con Node",
    description:
      "Cómo se arma una API, qué hace una base de datos y cómo empezar un proyecto de backend.",
    image: joseDiazImg,
  },
  {
    name: "Tomas Gomez",
    longDescription:
      "Una entrevista técnica se puede practicar. Tomas cuenta qué suelen preguntar, cómo prepararte y cómo explicar tus proyectos con seguridad, incluso cuando todavía no tenés experiencia laboral.",
    learn: ["Las preguntas técnicas más frecuentes", "Cómo contar tus proyectos de forma clara", "Qué hacer cuando no sabés la respuesta"],
    audience: "Quienes tienen su primera entrevista cerca",
    time: "20:00",
    talk: "Preparáte para tu primera entrevista",
    description:
      "Qué preguntan en una entrevista técnica, cómo practicar y cómo explicar tus proyectos.",
    image: tomasGomezImg,
  },
  {
    name: "Pablo Basso",
    longDescription:
      "Una charla en primera persona sobre cómo Pablo consiguió su primer puesto en IT, qué le costó y qué aprendió durante los primeros meses. Sin humo, con consejos que podés aplicar desde mañana.",
    learn: ["Cómo buscar y postularte a tu primer puesto", "Lo que nadie cuenta de los primeros meses", "Errores comunes que podés evitar"],
    audience: "Quienes buscan su primera oportunidad",
    time: "20:20",
    talk: "Mi primer trabajo en IT",
    description:
      "Una charla en primera persona sobre cómo conseguir el primer puesto y qué aprendió al comenzar.",
    image: pabloBassoImg,
  },
  {
    name: "Julian Martin",
    longDescription:
      "Testear no es perder el tiempo: es dormir tranquilo. Julian muestra qué es testear, por qué importa y cómo escribir tus primeras pruebas para que tu código no se rompa cada vez que lo tocás.",
    learn: ["Qué es un test y cuándo conviene escribirlo", "Tu primera prueba unitaria", "Cómo pensar en casos que pueden fallar"],
    audience: "Quienes ya programan y quieren hacerlo mejor",
    time: "20:40",
    talk: "Testing: cómo no romper todo",
    description:
      "Qué es testear, por qué importa y cómo escribir tus primeras pruebas.",
    image: julianMartinImg,
  },
  {
    name: "Daniela Cardozo",
    longDescription:
      "Entrar a un equipo da nervios. Daniela cuenta qué esperar de la primera semana, qué herramientas vas a usar y cómo pedir ayuda sin sentir que molestás.",
    learn: ["Cómo se organiza un equipo de desarrollo", "Las herramientas del día a día", "Cómo preguntar y recibir feedback"],
    audience: "Quienes están por empezar en un equipo",
    time: "18:20",
    talk: "Tu primer día como developer",
    description:
      "Qué esperar de tu primera semana en un equipo, qué herramientas usar y cómo pedir ayuda.",
    image: danielaCardozoImg,
  },
  {
    name: "Andres Perlo",
    longDescription:
      "Los datos están en todos lados. Andres explica qué es una base de datos, para qué sirve y cómo hacer tus primeras consultas para sacar la información que necesitás.",
    learn: ["Tablas, filas y relaciones sin enredos", "Tus primeras consultas SQL", "Cuándo usar una base de datos y cuándo no"],
    audience: "Quienes empiezan con datos o backend",
    time: "21:20",
    talk: "Tu primera base de datos",
    description:
      "Qué es una base de datos, para qué sirve y cómo consultar tus primeros datos.",
    image: andresPerloImg,
  },
];

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (speaker && !dialog.open) dialog.showModal();
    if (!speaker && dialog.open) dialog.close();
  }, [speaker]);

  return (
    <dialog
      ref={ref}
      className="speaker-modal"
      aria-labelledby="speaker-modal-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {speaker && (
        <div className="speaker-modal__body">
          <button
            type="button"
            className="speaker-modal__close"
            aria-label="Cerrar"
            onClick={onClose}
          >
            ×
          </button>
          <img
            className="speaker-modal__photo"
            src={speaker.image}
            alt={`Foto de ${speaker.name}`}
          />
          <div className="speaker-modal__info">
            <p className="speaker-modal__time">
              Jue 19/11 · {speaker.time} hs
            </p>
            <h3 id="speaker-modal-title" className="speaker-modal__talk">
              {speaker.talk}
            </h3>
            <p className="speaker-modal__name">{speaker.name}</p>
            <div className="speaker-modal__meta">
              <span>20 min</span>
              <span>Presencial y virtual</span>
              <span>Ideal para: {speaker.audience}</span>
            </div>
            <p className="speaker-modal__description">
              {speaker.longDescription}
            </p>
            <h4 className="speaker-modal__heading">Qué te vas a llevar</h4>
            <ul className="speaker-modal__learn">
              {speaker.learn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="speaker-modal__cta"
              href="#checkout"
              onClick={onClose}
            >
              Comprar entrada
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Speakers() {
  const [selected, setSelected] = useState<Speaker | null>(null);

  return (
    <section
      className="rc-section speakers"
      id="speakers"
      aria-labelledby="speakers-title"
    >
      <div className="rc-container">
        <header className="speakers__header">
          <p className="rc-label speakers__eyebrow">Speakers</p>

          <h2 className="speakers__title" id="speakers-title">
            Diez charlas, un mismo objetivo
          </h2>
        </header>

        <div className="speakers__grid">
          {speakers.map((speaker) => (
            <article className="speakers__card" key={speaker.name}>
              <button
                type="button"
                className="speakers__open"
                aria-label={`Ver charla de ${speaker.name}`}
                onClick={() => setSelected(speaker)}
              />
              <img
                className="speakers__photo"
                src={speaker.image}
                alt={speaker.name}
                loading="lazy"
              />

              <div className="speakers__content">
                <h3 className="rc-speaker-name speakers__name">
                  {speaker.name}
                </h3>

                <p className="speakers__talk">{speaker.talk}</p>
                <p className="speakers__description">
                  {speaker.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />
    </section>
  );
}