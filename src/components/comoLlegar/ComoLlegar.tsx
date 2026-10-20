import "./Comollegar.css";
const direccion = "Calle Gral. Paz 576, Entrepiso, 4000 San Miguel de Tucumán, Tucumán";

const bingMapsUrl =
  "https://www.bing.com/maps?cp=-26.8366~-65.2072&lvl=17";

 function ComoLlegar() {
  return (
    <section className="como-llegar" id="como-llegar">
      <div className="como-llegar__contenido">
        <div className="como-llegar__informacion">
          <p className="como-llegar__etiqueta">CÓMO LLEGAR</p>

          <h2>Te esperamos en Rolling Code School</h2>

          <div className="como-llegar__direccion">
            <svg
              className="como-llegar__icono"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 22s8-7.1 8-13a8 8 0 1 0-16 0c0 5.9 8 13 8 13Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>

            <p>{direccion}</p>
          </div>

          <ul className="como-llegar__datos" aria-label="Datos del evento">
            <li>Jueves 19/11</li>
            <li>18.00 hs</li>
            <li>Entrepiso</li>
          </ul>

          <div className="como-llegar__botones">
            <a
              className="boton boton--principal"
              href={bingMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Bing Maps
            </a>  
            <a className="boton boton--secundario" href="#comprar-entrada">
              Comprar entrada
            </a>
          </div>
        </div>

        <a
          className="mapa"
          href={bingMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver la ubicación de Rolling Code School en Bing Maps"
        >
          <div className="mapa__calles" aria-hidden="true">
            <span className="mapa__calle mapa__calle--vertical" />
            <span className="mapa__calle mapa__calle--horizontal" />

            <span className="mapa__marcador">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-7.1 8-13a8 8 0 1 0-16 0c0 5.9 8 13 8 13Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
          </div>

          <div className="mapa__tarjeta">
            <div className="mapa__lugar">
              <strong>Rolling Code School</strong>
              <span>Gral. Paz 576 · San Miguel de Tucumán</span>
            </div>

            <span className="mapa__coordenadas">-26.8366, -65.2072</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default ComoLlegar;