import "./Speakers.css";

type Speaker = {
  name: string;
  talk: string;
  description: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: "Tomas Escudero",
    talk: "Diseño para developers",
    description:
      "Qué mirar en una interfaz antes de escribir código y cómo leer un diseño para construirlo mejor.",
    image: "/images/speakers/tomas-escudero.jpg",
  },
  {
    name: "Franco Diaz",
    talk: "De cero a tu primer proyecto",
    description:
      "Un recorrido para pasar de mirar tutoriales a terminar una app simple con HTML, JavaScript y React.",
    image: "/images/speakers/franco-diaz.jpg",
  },
  {
    name: "Gaston",
    talk: "Armá tu portfolio con IA",
    description:
      "Cómo usar asistentes de IA para construir y publicar un portfolio que muestre lo que sabés hacer.",
    image: "/images/speakers/gaston.jpg",
  },
  {
    name: "Mauro",
    talk: "Git y GitHub sin miedo",
    description:
      "Los comandos que vas a usar todos los días y cómo trabajar en equipo sin pisar el código de otros.",
    image: "/images/speakers/mauro.jpg",
  },
  {
    name: "Jose Diaz",
    talk: "Tu primer backend con Node",
    description:
      "Cómo se arma una API, qué hace una base de datos y cómo empezar un proyecto de backend.",
    image: "/images/speakers/jose-diaz.jpg",
  },
  {
    name: "Tomas Gomez",
    talk: "Preparáte para tu primera entrevista",
    description:
      "Qué preguntan en una entrevista técnica, cómo practicar y cómo explicar tus proyectos.",
    image: "/images/speakers/tomas-gomez.jpg",
  },
  {
    name: "Pablo Basso",
    talk: "Mi primer trabajo en IT",
    description:
      "Una charla en primera persona sobre cómo conseguir el primer puesto y qué aprendió al comenzar.",
    image: "/images/speakers/pablo-basso.jpg",
  },
  {
    name: "Julian Martin",
    talk: "Testing: cómo no romper todo",
    description:
      "Qué es testear, por qué importa y cómo escribir tus primeras pruebas.",
    image: "/images/speakers/julian-martin.jpg",
  },
  {
    name: "Daniela Cardozo",
    talk: "Tu primer día como developer",
    description:
      "Qué esperar de tu primera semana en un equipo, qué herramientas usar y cómo pedir ayuda.",
    image: "/images/speakers/daniela-cardozo.jpg",
  },
  {
    name: "Andres Perlo",
    talk: "Tu primera base de datos",
    description:
      "Qué es una base de datos, para qué sirve y cómo consultar tus primeros datos.",
    image: "/images/speakers/andres-perlo.jpg",
  },
];

export default function Speakers() {
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
    </section>
  );
}