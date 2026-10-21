 import "./Events.css";

type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
};

const agenda: AgendaItem[] = [
  { time: "18:00", title: "Acreditación y bienvenida" },
  {
    time: "18:20",
    title: "Tu primer día como developer",
    speaker: "Daniela Cardozo",
  },
  {
    time: "18:40",
    title: "De cero a tu primer proyecto",
    speaker: "Franco Diaz",
  },
  {
    time: "19:00",
    title: "Armá tu portfolio con IA",
    speaker: "Gaston",
  },
  {
    time: "19:20",
    title: "Git y GitHub sin miedo",
    speaker: "Mauro",
  },
  {
    time: "19:40",
    title: "Tu primer backend con Node",
    speaker: "Jose Diaz",
  },
  {
    time: "20:00",
    title: "Preparáte para tu primera entrevista",
    speaker: "Tomas Gomez",
  },
  {
    time: "20:20",
    title: "Mi primer trabajo en IT",
    speaker: "Pablo Basso",
  },
  {
    time: "20:40",
    title: "Testing: cómo no romper todo",
    speaker: "Julian Martin",
  },
  {
    time: "21:00",
    title: "Diseño para developers",
    speaker: "Tomas Escudero",
  },
  {
    time: "21:20",
    title: "Tu primera base de datos",
    speaker: "Andres Perlo",
  },
  { time: "21:40", title: "Preguntas y networking" },
];

export default function Events() {
  return (
    <section className="rc-section events" id="agenda" aria-labelledby="events-title">
      <div className="rc-container events__layout">
        <header className="events__intro">
          <p className="rc-label events__label">Agenda</p>

          <h2 className="events__title" id="events-title">
            Jueves 19 de noviembre
          </h2>

          <p className="rc-lead events__description">
            Diez charlas cortas para salir con un plan claro. Al final queda
            tiempo para preguntas y networking.
          </p>
        </header>

        <ol className="events__list">
          {agenda.map((item) => (
            <li className="events__item" key={item.time}>
              <time className="events__time">{item.time}</time>

              <div className="events__details">
                <h3 className="events__talk">{item.title}</h3>

                {item.speaker && (
                  <p className="events__speaker">{item.speaker}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}