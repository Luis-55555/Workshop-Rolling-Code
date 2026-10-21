import './EventStats.css'

const stats = [
  { value: '120', label: 'lugares presenciales' },
  { value: '10', label: 'charlas de speakers' },
  { value: '3h 40', label: 'de 18 a 21.40 hs' },
  { value: '2', label: 'modalidades: presencial y virtual' },
]

function EventStats() {
  return (
    <section className='eventContainer'>
      <section className="event-stats" aria-label="Datos destacados del evento">
        {stats.map((stat) => (
          <div className="event-stats__item" key={stat.label}>
            <strong className="event-stats__value">{stat.value}</strong>
            <span className="event-stats__label">{stat.label}</span>
          </div>
        ))}
      </section>
    </section>
  )
}

export default EventStats