# Historias de Usuario

## Índice

| ID | Historia | Puntos | Prioridad | Estado |
|----|----------|--------|-----------|--------|
| HU-001 | Navbar de navegación principal | 3 | - | Pendiente |
| HU-002 | Sección hero del evento | 5 | - | Pendiente |
| HU-003 | Barra de datos destacados del evento | 2 | - | Pendiente |
| HU-004 | Sección de speakers | 5 | - | Pendiente |
| HU-005 | Sección de agenda | 3 | - | Pendiente |
| HU-006 | Sección de entradas | 5 | - | Pendiente |
| HU-007 | Compra de entradas: selección de entrada (paso 1) | 8 | - | Pendiente |
| HU-008 | Sección Cómo llegar | 3 | - | Pendiente |
| HU-009 | Footer con redes sociales | 1 | - | Pendiente |
| HU-010 | Sección de sponsors por niveles | 5 | - | Pendiente |
| HU-011 | Formulario de postulación de sponsors | 5 | - | Pendiente |

---

### HU-001: Navbar de navegación principal

**Puntos:** 3

**Como** visitante del sitio del evento
**Quiero** una barra de navegación fija en la parte superior con el logo, los enlaces a las secciones y un botón de compra
**Para** moverme fácilmente entre las secciones del sitio y comprar mi entrada desde cualquier punto de la página

**Criterios de aceptación**

- [ ] **Dado** que ingreso al sitio, **cuando** carga la página, **entonces** veo el navbar en la parte superior con el logo de Rolling Code School a la izquierda.
- [ ] **Dado** que veo el navbar, **cuando** observo el lado derecho, **entonces** aparecen los enlaces "Speakers", "Agenda" y "Cómo llegar", seguidos del botón destacado "Comprar entrada".
- [ ] **Dado** que hago clic en "Speakers", "Agenda" o "Cómo llegar", **cuando** se ejecuta la acción, **entonces** la página se desplaza suavemente a la sección correspondiente.
- [ ] **Dado** que hago clic en el logo, **cuando** se ejecuta la acción, **entonces** vuelvo al inicio de la página.
- [ ] **Dado** que hago clic en "Comprar entrada", **cuando** se ejecuta la acción, **entonces** soy dirigido al flujo de compra de entradas.
- [ ] **Dado** que paso el cursor sobre un enlace o el botón, **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica que es interactivo.
- [ ] **Dado** que me desplazo por la página, **cuando** bajo por el contenido, **entonces** el navbar permanece visible en la parte superior.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** carga la página, **entonces** los enlaces se agrupan en un menú desplegable (hamburguesa) y el logo y el botón de compra siguen accesibles.

**Notas:** Los enlaces del navbar deben corresponder a las secciones existentes en la página (Speakers, Agenda, Cómo llegar).

---

### HU-002: Sección hero del evento

**Puntos:** 5

**Como** visitante del sitio del evento
**Quiero** ver al ingresar una sección principal con el título del workshop, una breve descripción, los datos clave del evento y botones de acción
**Para** entender rápidamente de qué trata el evento, cuándo y dónde se realiza, cuánto cuesta, y poder comprar mi entrada o ver la agenda

**Criterios de aceptación**

- [ ] **Dado** que ingreso al sitio, **cuando** carga la página, **entonces** veo debajo del navbar una sección principal con la etiqueta "Workshop · Entradas limitadas" y el título "¿Por dónde empiezo a programar?".
- [ ] **Dado** que veo la sección principal, **cuando** leo el texto de apoyo, **entonces** aparece la descripción: "Una tarde con diez speakers de Rolling Code School para ordenar tus primeros pasos: qué aprender, cómo practicar y cómo mostrar lo que sabés."
- [ ] **Dado** que veo la sección principal, **cuando** observo la tarjeta de información, **entonces** se muestran la fecha y hora (jue 19/11, 18:00 hs), el lugar (Rolling Code School, Gral. Paz 576, Entrepiso) y el precio (entradas desde $15.000, Early Bird hasta el 31/10).
- [ ] **Dado** que veo la tarjeta de información, **cuando** reviso las etiquetas, **entonces** aparecen "Presencial", "Virtual" y "Cupos limitados", esta última resaltada.
- [ ] **Dado** que hago clic en "Comprar entrada", **cuando** se ejecuta la acción, **entonces** soy dirigido al flujo de compra de entradas.
- [ ] **Dado** que hago clic en "Ver agenda", **cuando** se ejecuta la acción, **entonces** la página se desplaza suavemente a la sección Agenda.
- [ ] **Dado** que paso el cursor sobre "Comprar entrada" o "Ver agenda", **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica que son interactivos.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** carga la página, **entonces** la tarjeta de información se muestra debajo del texto principal y todo el contenido es legible sin desplazamiento horizontal.

**Notas:** Los datos del evento (fecha, lugar, precio, fecha límite Early Bird) deben poder actualizarse fácilmente sin modificar la estructura de la sección.

---

### HU-003: Barra de datos destacados del evento

**Puntos:** 2

**Como** visitante del sitio del evento
**Quiero** ver un resumen en cifras de los datos más importantes del evento
**Para** dimensionar de un vistazo la propuesta (cupos, charlas, duración y modalidades) y decidir si me interesa asistir

**Criterios de aceptación**

- [ ] **Dado** que me desplazo por la página, **cuando** llego a la sección posterior al hero, **entonces** veo una barra con cuatro datos destacados, cada uno con una cifra resaltada y una descripción breve.
- [ ] **Dado** que veo la barra, **cuando** leo el primer dato, **entonces** muestra "120 lugares presenciales".
- [ ] **Dado** que veo la barra, **cuando** leo el segundo dato, **entonces** muestra "10 charlas de speakers".
- [ ] **Dado** que veo la barra, **cuando** leo el tercer dato, **entonces** muestra "3 h 40, de 18.00 a 21.40 hs".
- [ ] **Dado** que veo la barra, **cuando** leo el cuarto dato, **entonces** muestra "2 modalidades: presencial y virtual".
- [ ] **Dado** que los cuatro datos se muestran, **cuando** los observo en pantalla de escritorio, **entonces** están distribuidos en una sola fila con el mismo espacio entre ellos.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la sección, **entonces** los datos se reorganizan en filas o columnas (por ejemplo, 2x2) sin desplazamiento horizontal y manteniendo la legibilidad.

**Notas:** Las cifras deben ser coherentes con el resto del sitio (hero y agenda): horario 18:00 a 21:40 hs, 10 speakers y modalidades presencial y virtual. Deben poder actualizarse fácilmente.

---

### HU-004: Sección de speakers

**Puntos:** 5

**Como** visitante del sitio del evento
**Quiero** conocer a los speakers y el tema de la charla que dará cada uno
**Para** identificar qué charlas me interesan y decidir si el evento me aporta lo que busco

**Criterios de aceptación**

- [ ] **Dado** que llego a la sección de speakers, **cuando** carga el contenido, **entonces** veo la etiqueta "Speakers" y el título "Diez charlas, un mismo objetivo".
- [ ] **Dado** que veo la sección, **cuando** observo el listado, **entonces** se muestra una tarjeta por cada uno de los diez speakers.
- [ ] **Dado** que veo una tarjeta de speaker, **cuando** la leo, **entonces** contiene la foto, el nombre, el título de la charla (como etiqueta) y una breve descripción de su contenido.
- [ ] **Dado** que las tarjetas no entran completas en pantalla, **cuando** me desplazo horizontalmente (scroll, arrastre o gesto táctil), **entonces** puedo recorrer todas las tarjetas hasta ver a los diez speakers.
- [ ] **Dado** que veo las tarjetas en el recorrido horizontal, **cuando** la última visible queda cortada en el borde, **entonces** esto indica que hay más contenido por descubrir.
- [ ] **Dado** que existe una tarjeta con la etiqueta de charla resaltada, **cuando** la observo, **entonces** se distingue visualmente del resto como speaker destacado o seleccionado.
- [ ] **Dado** que paso el cursor sobre una tarjeta, **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica interacción.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la sección, **entonces** las tarjetas se adaptan al ancho disponible y el recorrido horizontal se puede hacer con gestos táctiles.

**Notas:** La imagen muestra cinco de los diez speakers; el resto debe cargarse con la misma estructura de tarjeta. Falta definir si la tarjeta resaltada indica un estado (seleccionada/activa) o un speaker destacado, y si las tarjetas abren más detalle. Las fotos deben tener texto alternativo con el nombre del speaker.

---

### HU-005: Sección de agenda

**Puntos:** 3

**Como** visitante del sitio del evento
**Quiero** ver la agenda del día con el horario, el título y el speaker de cada actividad
**Para** planificar mi asistencia y saber a qué hora se dará cada charla que me interesa

**Criterios de aceptación**

- [ ] **Dado** que llego a la sección de agenda, **cuando** carga el contenido, **entonces** veo la etiqueta "Agenda", el título "Jueves 19 de noviembre" y el texto "Diez charlas cortas para salir con un plan claro. Al final queda tiempo para preguntas y networking."
- [ ] **Dado** que veo la sección, **cuando** observo el listado, **entonces** se muestran las actividades en orden cronológico, comenzando con "Acreditación y bienvenida" a las 18:00.
- [ ] **Dado** que veo una actividad de la agenda, **cuando** la leo, **entonces** muestra el horario de inicio, el título de la charla y el nombre del speaker.
- [ ] **Dado** que veo la actividad "Acreditación y bienvenida", **cuando** la leo, **entonces** muestra solo horario y título, sin speaker.
- [ ] **Dado** que veo el listado, **cuando** reviso los horarios, **entonces** las charlas se suceden cada 20 minutos y cada fila queda separada de la siguiente por una línea divisoria.
- [ ] **Dado** que comparo la agenda con la sección de speakers, **cuando** reviso los títulos y nombres, **entonces** coinciden en ambas secciones.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la sección, **entonces** el encabezado y el listado se muestran en una sola columna, con horario, título y speaker legibles y sin desplazamiento horizontal.
- [ ] **Dado** que hago clic en "Ver agenda" del hero o en "Agenda" del navbar, **cuando** se ejecuta la acción, **entonces** llego a esta sección.

**Notas:** La imagen muestra 9 filas (de 18:00 a 20:40) y la agenda debe completar las 10 charlas y el cierre del evento a las 21:40 hs, por lo que faltan las últimas filas por definir. Los datos deben ser consistentes con la barra de datos (HU-003) y el hero (HU-002).

---

### HU-006: Sección de entradas

**Puntos:** 5

**Como** visitante del sitio del evento
**Quiero** comparar los tipos de entrada disponibles, sus precios y beneficios, y ver cuánto tiempo y cupo quedan de la promoción Early Bird
**Para** elegir la entrada que mejor se ajuste a mí y comprarla antes de que suba el precio

**Criterios de aceptación**

- [ ] **Dado** que llego a la sección de entradas, **cuando** carga el contenido, **entonces** veo la etiqueta "Entradas" y el título "Asegurá tu lugar antes de que suba el precio".
- [ ] **Dado** que veo el banner de Early Bird, **cuando** lo leo, **entonces** indica que el precio especial termina el 31/10 y que después la entrada pasa de $25.000 a $35.000.
- [ ] **Dado** que veo el banner de Early Bird, **cuando** observo la cuenta regresiva, **entonces** muestra los días, horas y minutos restantes hasta el fin de la promoción.
- [ ] **Dado** que la cuenta regresiva está visible, **cuando** pasa un minuto, **entonces** el contador se actualiza automáticamente sin recargar la página.
- [ ] **Dado** que la fecha límite del Early Bird se cumple, **cuando** el contador llega a cero, **entonces** el banner y la tarjeta Early Bird dejan de mostrarse como disponibles y queda vigente la entrada General.
- [ ] **Dado** que veo el banner de Early Bird, **cuando** observo la barra de progreso, **entonces** muestra cuántas entradas Early Bird quedan sobre el total (38 de 60) y el porcentaje correspondiente, con la barra proporcional a ese valor.
- [ ] **Dado** que se agotan las entradas Early Bird, **cuando** el cupo llega a cero, **entonces** la tarjeta Early Bird se muestra como agotada y no permite comprar.
- [ ] **Dado** que veo las tarjetas de entradas, **cuando** las observo, **entonces** hay tres opciones: Early Bird, General y Virtual, cada una con su nombre, precio, modalidad y lista de beneficios.
- [ ] **Dado** que veo la tarjeta Early Bird, **cuando** la leo, **entonces** destaca visualmente sobre las demás, muestra el precio de $25.000 con el precio regular de $35.000 tachado, la etiqueta "Quedan 38" y los beneficios: acceso a las 10 charlas, kit de stickers Rolling Code, certificado de asistencia, coffee break y networking con los speakers, y grabación de todas las charlas.
- [ ] **Dado** que veo la tarjeta General, **cuando** la leo, **entonces** muestra el precio de $35.000, la etiqueta "Desde el 1/11", la modalidad presencial y los beneficios: acceso a las 10 charlas, certificado de asistencia, coffee break y networking con los speakers, y grabación de todas las charlas.
- [ ] **Dado** que veo la tarjeta Virtual, **cuando** la leo, **entonces** muestra el precio de $15.000, la etiqueta "Desde donde estés", la modalidad de transmisión en vivo y los beneficios: transmisión en vivo de las 10 charlas, chat para hacer preguntas a los speakers, certificado de asistencia y grabación disponible por 30 días.
- [ ] **Dado** que hago clic en "Comprar entrada" de una tarjeta, **cuando** se ejecuta la acción, **entonces** soy dirigido al flujo de compra con ese tipo de entrada preseleccionado.
- [ ] **Dado** que paso el cursor sobre una tarjeta o botón, **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica interacción.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la sección, **entonces** el banner y las tarjetas se apilan en una sola columna, y la cuenta regresiva y los textos se mantienen legibles sin desplazamiento horizontal.

**Notas:**
- Los precios deben ser coherentes con el hero (HU-002): "desde $15.000" corresponde a la entrada Virtual, y el Early Bird vence el 31/10.
- El banner muestra "Quedan 38 de 60 Early Bird" y "63% vendidas", pero 38 de 60 es el 63% **disponible**, no vendido (lo vendido sería ~37%). Hay que definir cuál porcentaje se debe mostrar; el criterio actual indica que el porcentaje debe corresponder al dato que se rotula.
- Falta definir qué pasa con el flujo de compra (pasarela de pago, datos del comprador) y si se agregan historias separadas para eso.
- Los precios, cupos y fechas deben poder actualizarse fácilmente.

---

### HU-007: Compra de entradas: selección de entrada (paso 1)

**Puntos:** 8

**Como** visitante interesado en asistir al evento
**Quiero** elegir el tipo de entrada y la cantidad, y ver el resumen de mi pedido con el total a pagar
**Para** iniciar mi compra con claridad sobre lo que voy a pagar antes de continuar con mis datos y el pago

**Criterios de aceptación**

- [ ] **Dado** que hago clic en "Comprar entrada" desde el navbar, el hero o una tarjeta de entradas, **cuando** se ejecuta la acción, **entonces** llego a la sección de compra con la etiqueta "Compra segura" y el título "Finalizá tu compra".
- [ ] **Dado** que veo el encabezado de la compra, **cuando** observo el indicador de pasos, **entonces** se muestran los cuatro pasos (1 Entrada, 2 Datos, 3 Pago, 4 Listo) y el paso 1 aparece marcado como el actual.
- [ ] **Dado** que estoy en el paso 1, **cuando** veo el bloque "Elegí tu entrada", **entonces** se listan las opciones Early Bird ($25.000, presencial, hasta el 31/10), General ($35.000, presencial, desde el 1/11) y Virtual ($15.000, transmisión en vivo y grabación).
- [ ] **Dado** que llegué desde una tarjeta de entradas concreta (HU-006), **cuando** carga el paso 1, **entonces** esa entrada aparece preseleccionada; si llegué desde otro punto, se preselecciona la opción vigente por defecto (Early Bird mientras esté disponible).
- [ ] **Dado** que veo las opciones de entrada, **cuando** selecciono una, **entonces** queda marcada como seleccionada y es la única seleccionada.
- [ ] **Dado** que el Early Bird venció o se agotó, **cuando** veo las opciones, **entonces** esa opción aparece como no disponible y no se puede seleccionar.
- [ ] **Dado** que veo el selector de cantidad, **cuando** hago clic en "+", **entonces** la cantidad aumenta en 1, y cuando hago clic en "−", **entonces** disminuye en 1.
- [ ] **Dado** que la cantidad es 1, **cuando** hago clic en "−", **entonces** la cantidad no baja de 1.
- [ ] **Dado** que la cantidad alcanza el máximo permitido por compra (o el cupo disponible del tipo elegido), **cuando** hago clic en "+", **entonces** no aumenta más y se informa el límite.
- [ ] **Dado** que veo el resumen "Tu pedido", **cuando** lo leo, **entonces** muestra el nombre del evento, la fecha, hora y lugar (Jueves 19/11 · 18.00 hs · Gral. Paz 576), la línea de la entrada elegida con su cantidad y subtotal, el cargo por servicio del 5% y el total.
- [ ] **Dado** que cambio el tipo de entrada o la cantidad, **cuando** se actualiza la selección, **entonces** el resumen recalcula de inmediato subtotal, cargo por servicio (5% del subtotal) y total (por ejemplo, 1 Early Bird: $25.000 + $1.250 = $26.250).
- [ ] **Dado** que veo el resumen, **cuando** leo la nota inferior, **entonces** indica "Pago protegido. Recibís la entrada por email."
- [ ] **Dado** que veo el formulario, **cuando** leo el pie, **entonces** aparece la aclaración "Pasarela de pago de ejemplo: no se procesan pagos ni se guardan datos."
- [ ] **Dado** que he elegido una entrada y una cantidad válidas, **cuando** hago clic en "Continuar", **entonces** avanzo al paso 2 (Datos) conservando mi selección.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la compra, **entonces** el bloque de selección y el resumen se apilan en una sola columna y el indicador de pasos se mantiene legible sin desplazamiento horizontal.

**Notas:**
- Esta historia cubre solo el **paso 1 (Entrada)**. Los pasos 2 (Datos), 3 (Pago) y 4 (Listo) se documentarán en historias separadas cuando se compartan sus pantallas.
- La pasarela es de ejemplo: no se procesan pagos reales ni se guardan datos.
- Falta definir el máximo de entradas por compra y si se puede volver atrás desde pasos posteriores conservando la selección.
- Los precios y el porcentaje del cargo por servicio deben ser coherentes con la sección de entradas (HU-006) y poder actualizarse fácilmente.

---

### HU-008: Sección Cómo llegar

**Puntos:** 3

**Como** visitante del sitio del evento
**Quiero** ver la dirección del lugar, la fecha y hora, y una referencia en mapa con acceso a la ubicación exacta
**Para** saber cómo llegar al evento sin dificultad el día que asista

**Criterios de aceptación**

- [ ] **Dado** que llego a la sección, **cuando** carga el contenido, **entonces** veo la etiqueta "Cómo llegar" y el título "Te esperamos en Rolling Code School".
- [ ] **Dado** que veo la sección, **cuando** leo los datos del lugar, **entonces** aparece la dirección completa: "Calle Gral. Paz 576, Entrepiso, 4000 San Miguel de Tucumán, Tucumán".
- [ ] **Dado** que veo la sección, **cuando** observo las etiquetas, **entonces** se muestran la fecha (Jueves 19/11), la hora (18.00 hs) y el piso (Entrepiso).
- [ ] **Dado** que veo la sección, **cuando** observo el área del mapa, **entonces** se muestra una referencia visual con un marcador en la ubicación del evento y una tarjeta con el nombre del lugar, la dirección y las coordenadas (-26.8366, -65.2072).
- [ ] **Dado** que hago clic en "Abrir en Bing Maps", **cuando** se ejecuta la acción, **entonces** se abre Bing Maps en una nueva pestaña con la ubicación del evento.
- [ ] **Dado** que hago clic en "Comprar entrada", **cuando** se ejecuta la acción, **entonces** soy dirigido al flujo de compra de entradas.
- [ ] **Dado** que paso el cursor sobre un botón, **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica que es interactivo.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la sección, **entonces** el mapa se muestra debajo del texto, ocupa el ancho disponible y todo el contenido es legible sin desplazamiento horizontal.

**Notas:**
- Los datos del lugar y la fecha deben ser coherentes con el hero (HU-002) y el resumen de compra (HU-007).
- El mapa de la imagen parece una representación estática, no un mapa interactivo; el acceso a la ubicación real se hace con el botón "Abrir en Bing Maps". Falta confirmar si se espera un mapa interactivo.

---

### HU-009: Footer con redes sociales

**Puntos:** 1

**Como** visitante del sitio del evento
**Quiero** ver al final de la página el logo de Rolling Code School y accesos a sus redes sociales
**Para** conocer más sobre la escuela y seguirla en los canales que utilizo

**Criterios de aceptación**

- [ ] **Dado** que llego al final de la página, **cuando** observo el pie, **entonces** veo el footer separado del contenido por una línea divisoria, con el logo de Rolling Code School a la izquierda.
- [ ] **Dado** que veo el footer, **cuando** observo el lado derecho, **entonces** aparecen seis íconos de redes sociales en este orden: Instagram, Facebook, LinkedIn, YouTube, X y GitHub.
- [ ] **Dado** que hago clic en un ícono de red social, **cuando** se ejecuta la acción, **entonces** se abre el perfil oficial de Rolling Code School en esa red, en una nueva pestaña.
- [ ] **Dado** que hago clic en el logo, **cuando** se ejecuta la acción, **entonces** vuelvo al inicio de la página.
- [ ] **Dado** que paso el cursor sobre un ícono, **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica que es interactivo.
- [ ] **Dado** que uso un lector de pantalla, **cuando** navego por los íconos, **entonces** cada uno tiene una etiqueta accesible con el nombre de su red social.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego al footer, **entonces** el logo y los íconos se reorganizan para entrar en el ancho disponible sin desplazamiento horizontal y mantienen un tamaño cómodo para tocar.

**Notas:** Faltan definir las URLs de los perfiles de cada red social. El logo debe ser el mismo que el del navbar (HU-001).

---

### HU-010: Sección de sponsors por niveles

**Puntos:** 5

**Como** visitante del sitio del evento
**Quiero** ver las empresas que patrocinan el evento, organizadas por nivel de patrocinio y con una breve descripción de cada una
**Para** conocer qué organizaciones respaldan el evento y qué oportunidades (becas, vouchers, empleo) ofrecen a la comunidad

**Criterios de aceptación**

- [ ] **Dado** que llego a la sección de sponsors, **cuando** carga el contenido, **entonces** veo los patrocinadores agrupados en tres niveles: Main Partners (Tier Diamante), Gold Tier (Nivel Oro) y Bronze Tier (Nivel Bronce).
- [ ] **Dado** que veo un nivel, **cuando** observo su encabezado, **entonces** muestra un ícono, el nombre del nivel, una etiqueta con su categoría y una descripción breve de lo que representa.
- [ ] **Dado** que veo el nivel Main Partners, **cuando** observo sus tarjetas, **entonces** se muestran tres tarjetas grandes (Google Cloud, Amazon Web Services y Mercado Libre) con logo, nombre, descripción, etiqueta de rol, categoría y un distintivo en el pie.
- [ ] **Dado** que veo las tarjetas de Main Partners, **cuando** las comparo, **entonces** cada una tiene un borde de acento propio y se destacan visualmente por encima de los otros niveles.
- [ ] **Dado** que veo el nivel Gold Tier, **cuando** observo sus tarjetas, **entonces** se muestran cinco tarjetas medianas (Microsoft, GitHub, Globant, Auth0 y Vercel) con logo, nombre, especialidad y una etiqueta.
- [ ] **Dado** que veo el nivel Bronze Tier, **cuando** observo sus tarjetas, **entonces** se muestran siete tarjetas compactas (Supabase, DigitalOcean, Cloudflare, MongoDB, Docker, Stripe y Postman) con logo, nombre y especialidad.
- [ ] **Dado** que los niveles se muestran en la página, **cuando** los recorro de arriba hacia abajo, **entonces** el tamaño y el protagonismo de las tarjetas disminuyen según el nivel (Diamante, Oro, Bronce).
- [ ] **Dado** que las tarjetas de Main Partners incluyen un ícono de enlace, **cuando** hago clic en la tarjeta o en el ícono, **entonces** se abre el sitio del sponsor en una nueva pestaña.
- [ ] **Dado** que paso el cursor sobre una tarjeta, **cuando** el cursor está encima, **entonces** se muestra un cambio visual que indica que es interactiva.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego a la sección, **entonces** las tarjetas se reacomodan en menos columnas (una o dos por fila) sin desplazamiento horizontal y los textos son legibles.

**Notas:**
- Falta definir en qué parte de la página va esta sección (por ejemplo, entre Agenda y Entradas) y si se agrega un enlace en el navbar (HU-001).
- Faltan las URLs de los sponsors y definir si las tarjetas de Gold y Bronze también son enlaces.
- Los textos de los distintivos de las tarjetas (por ejemplo, "100% Verified", "Global Leader", "Unicorn LATAM") deben ser confirmados con los sponsors; por su tono de verificación, conviene validarlos antes de publicar.
- Los logos y nombres de marcas requieren autorización o confirmación de uso por parte de cada sponsor.
- Los datos de los sponsors deben poder actualizarse fácilmente (agregar, quitar o cambiar de nivel).

---

### HU-011: Formulario de postulación de sponsors

**Puntos:** 5

**Como** representante de una empresa interesada en patrocinar el evento
**Quiero** completar un formulario con los datos de mi empresa y el nivel de sponsoreo que busco
**Para** postularme como sponsor y que el equipo organizador se contacte conmigo

**Criterios de aceptación**

- [ ] **Dado** que llego a la sección de postulación, **cuando** carga el contenido, **entonces** veo el título "Sumate como Sponsor" y el texto: "Conectá tu marca con más de 120 talentos IT, programadores junior, semi-seniors y líderes tecnológicos del norte argentino. Completá el formulario y nos contactaremos en menos de 24 horas hábiles."
- [ ] **Dado** que veo el formulario, **cuando** observo los campos, **entonces** aparecen Nombre, Apellido, Empresa y Email corporativo (obligatorios), Tipo de sponsor (obligatorio), Logo de la empresa y Mensaje opcional.
- [ ] **Dado** que veo los campos obligatorios, **cuando** los observo, **entonces** están marcados con un asterisco y cada campo muestra un texto de ejemplo (placeholder).
- [ ] **Dado** que abro el selector de Tipo de sponsor, **cuando** despliego las opciones, **entonces** puedo elegir entre los niveles de sponsoreo (Diamante, Oro y Bronce), coherentes con los de la sección de sponsors (HU-010).
- [ ] **Dado** que quiero adjuntar mi logo, **cuando** hago clic en el área de carga o arrastro un archivo hasta ella, **entonces** el archivo queda adjunto y se muestra su nombre.
- [ ] **Dado** que adjunto un archivo, **cuando** su formato no es PNG, SVG, JPG o WEBP, o pesa más de 5 MB, **entonces** se rechaza y se muestra un mensaje que explica el motivo.
- [ ] **Dado** que intento enviar el formulario, **cuando** falta algún campo obligatorio, **entonces** no se envía y se indica qué campos deben completarse.
- [ ] **Dado** que ingreso un email, **cuando** no tiene un formato válido, **entonces** se muestra un mensaje de error en ese campo.
- [ ] **Dado** que completo todos los campos obligatorios de forma válida, **cuando** hago clic en "Enviar postulación de Sponsor", **entonces** la postulación se envía y veo un mensaje de confirmación de que nos contactaremos en menos de 24 horas hábiles.
- [ ] **Dado** que la postulación se envía correctamente, **cuando** aparece la confirmación, **entonces** el formulario se limpia para evitar envíos duplicados.
- [ ] **Dado** que el envío falla, **cuando** ocurre el error, **entonces** veo un mensaje que lo informa y conservo los datos que había ingresado.
- [ ] **Dado** que el formulario se está enviando, **cuando** hago clic en el botón, **entonces** el botón se deshabilita hasta recibir la respuesta.
- [ ] **Dado** que accedo desde un dispositivo móvil o pantalla pequeña, **cuando** llego al formulario, **entonces** los campos que están en dos columnas pasan a una sola y el formulario se completa sin desplazamiento horizontal.

**Notas:**
- Falta definir a dónde llegan las postulaciones (email del equipo, base de datos o servicio externo) y dónde se almacenan los logos adjuntos.
- Falta definir en qué parte de la página va esta sección (por ejemplo, a continuación de HU-010) y si se enlaza desde el navbar (HU-001).
- Las opciones del selector se asumieron a partir de los tres niveles de HU-010; confirmar si existe otra opción (por ejemplo, "Otro").
- Se recomienda validar el email también en el servidor y limitar los envíos repetidos para evitar spam.
- La promesa de respuesta en menos de 24 horas hábiles es un compromiso del equipo organizador: confirmar que puede cumplirse.

---

## Resumen de puntos

| ID | Historia | Puntos |
|----|----------|--------|
| HU-001 | Navbar de navegación principal | 3 |
| HU-002 | Sección hero del evento | 5 |
| HU-003 | Barra de datos destacados del evento | 2 |
| HU-004 | Sección de speakers | 5 |
| HU-005 | Sección de agenda | 3 |
| HU-006 | Sección de entradas | 5 |
| HU-007 | Compra de entradas: selección de entrada (paso 1) | 8 |
| HU-008 | Sección Cómo llegar | 3 |
| HU-009 | Footer con redes sociales | 1 |
| HU-010 | Sección de sponsors por niveles | 5 |
| HU-011 | Formulario de postulación de sponsors | 5 |
| | **Total** | **45** |

---

## Sugerencia de reparto entre 3 desarrolladores

Promedio ideal: 15 puntos por desarrollador.

| Desarrollador | Historias | Puntos | Enfoque |
|---------------|-----------|--------|---------|
| **Dev 1 – Eduardo** | HU-007 (8) + HU-001 (3) + HU-009 (1) + HU-011 (5) | **17** | Flujo de compra, estructura global (navbar y footer) y formulario de sponsors |
| **Dev 2 – Luciana** | HU-002 (5) + HU-006 (5) + HU-003 (2) | **12** | Parte superior de la landing y venta de entradas |
| **Dev 3 – Luis** | HU-004 (5) + HU-005 (3) + HU-008 (3) + HU-010 (5) | **16** | Contenido informativo del evento (speakers, agenda, ubicación y sponsors) |

**Criterios del reparto**

- **Carga:** 17 / 12 / 16 puntos. Luciana queda con margen para apoyar a Eduardo o Luis si se complican sus historias.
- **Afinidad entre historias:** cada desarrollador toma secciones relacionadas, lo que reduce el cambio de contexto y favorece componentes y estilos coherentes.
- **Historia más grande separada:** HU-007 (8 puntos) la asume Eduardo (Dev 1), con historias pequeñas que lo equilibran.

**Dependencias a coordinar**

- HU-007 (Dev 1 – Eduardo) recibe el tipo de entrada preseleccionado desde HU-006 (Dev 2 – Luciana): acordar temprano cómo se pasa ese dato (parámetro o estado compartido).
- Los enlaces del navbar HU-001 (Dev 1 – Eduardo) apuntan a secciones de HU-004, HU-005 y HU-008 (Dev 3 – Luis): acordar los identificadores de ancla (`#speakers`, `#agenda`, `#como-llegar`).
- Los botones "Comprar entrada" de HU-001, HU-002, HU-006 y HU-008 llevan todos a HU-007: definir la ruta o ancla de compra desde el inicio.
- Los datos del evento (fecha, lugar, precios, horarios) se repiten en varias historias: centralizarlos en un único archivo de datos o constantes compartidas.

---

## Plantilla

### HU-XXX: Título de la historia

**Puntos:** N

**Como** [rol de usuario]
**Quiero** [acción o funcionalidad]
**Para** [beneficio o valor que obtiene]

**Criterios de aceptación**

- [ ] **Dado** [contexto inicial], **cuando** [acción], **entonces** [resultado esperado].
- [ ] **Dado** [contexto inicial], **cuando** [acción], **entonces** [resultado esperado].
- [ ] **Dado** [contexto inicial], **cuando** [acción], **entonces** [resultado esperado].

**Notas:** _(opcional: dependencias, restricciones, consideraciones técnicas)_

---
