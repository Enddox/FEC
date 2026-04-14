# FEC

## Descripción

Este proyecto es una mini página de información académica para la sección I-2026 de la Licenciatura en Computación. El sitio usa una arquitectura modular de datos para que puedas editar horarios, materias, actividades, profesores y noticias desde un único archivo de datos.

## Estructura del proyecto

- `index.html`: página de inicio con noticias y acceso rápido a materias.
- `horario.html`: horario semanal generado desde datos centrales.
- `profesores.html`: listado de profesores.
- `grupos.html`: enlaces a grupos y recursos del curso.
- `calculoi.html`, `comunicacion.html`, `algoritmos.html`, `logicamatematica.html`, `orientacion.html`, `ppi.html`: páginas de materia con actividades, material y datos de clase.
- `data/site-data.js`: fuente de datos central.
- `styles.css`: estilos compartidos del sitio.

## Arquitectura modular

Los datos compartidos están centralizados en `data/site-data.js`.

Ese archivo define `window.FEC_DATA` y contiene:

- `site`: datos generales del sitio
- `nav`: navegación principal y materias disponibles
- `courses`: lista de cursos y enlaces de páginas
- `schedule`: horario semanal con tiempos y enlaces automáticos
- `professors`: lista de profesores y cursos
- `activities`: actividades por curso
- `news`: noticias y comunicados que se muestran en `index.html`

También exporta helpers como `FEC_GET_COURSE_BY_FILENAME` y `FEC_GET_COURSE_LINKS` usados por las páginas.

## Qué archivos alimenta

- `index.html`: carga noticias dinámicas desde `FEC_DATA.news` y muestra los accesos a materias disponibles.
- `horario.html`: dibuja el horario desde `FEC_DATA.schedule` y enlaza cada materia usando `FEC_DATA.courses`.
- `profesores.html`: muestra la lista de profesores desde `FEC_DATA.professors`.
- `calculoi.html`: muestra actividades y material desde `FEC_DATA.activities.calc` y `FEC_DATA.courses`.
- `comunicacion.html`: muestra actividades y material desde `FEC_DATA.activities.comu` y `FEC_DATA.courses`.
- `algoritmos.html`: muestra actividades y material desde `FEC_DATA.activities.algo` y `FEC_DATA.courses`.
- `logicamatematica.html`: muestra actividades y material desde `FEC_DATA.activities.logi` y `FEC_DATA.courses`.
- `orientacion.html`: muestra actividades y material desde `FEC_DATA.activities.orie` y `FEC_DATA.courses`.
- `ppi.html`: muestra actividades y material desde `FEC_DATA.activities.ppi` y `FEC_DATA.courses`.
- `grupos.html`: página de enlaces a grupos y recursos del curso (no depende directamente de `FEC_DATA`).

## Cómo editar datos

### Editar horarios

1. Abre `data/site-data.js`.
2. Busca `FEC_DATA.schedule`.
3. Modifica o agrega entradas con este formato:

```js
{
  d: 0,         // 0=lunes, 1=martes, 2=miércoles, 3=jueves, 4=viernes
  sh: 18,       // hora de inicio (24h)
  sm: 0,        // minuto de inicio
  eh: 20,       // hora de fin (24h)
  em: 0,        // minuto de fin
  ck: 'comu',   // código del curso, enlazará con FEC_DATA.courses
  tp: 'online'  // tipo de clase
}
```

4. Guarda y abre `horario.html` para verificar.

### Agregar o cambiar materias

1. Abre `data/site-data.js`.
2. Busca `FEC_DATA.courses`.
3. Añade o edita un objeto de curso.

Ejemplo:

```js
{
  ck: 'algo',
  filename: 'algoritmos.html',
  name: 'Algoritmos y Programacion I',
  pageTitle: 'Algoritmos y Programacion I - I-2026',
  modalidad: 'Presencial',
  profesor: 'Dr. José Alvarez',
  classroomCode: 'algo123',
  classroomUrl: 'https://classroom.google.com',
  zoomId: '######',
  zoomPass: '######',
  zoomUrl: 'https://zoom.us/join',
  whatsappUrl: 'https://chat.whatsapp.com/examplealgo',
  groupLabel: 'Grupo de WhatsApp'
}
```

4. Si agregas un curso nuevo, también debes crear la página `.html` correspondiente con la misma lógica que las demás páginas de materia.

### Agregar material a una materia

1. Abre `data/site-data.js`.
2. Busca el curso dentro de `FEC_DATA.courses`.
3. Añade un objeto `material`.

Ejemplo:

```js
material: {
  title: 'Apuntes de Algoritmos',
  desc: 'Documento base para el semestre.',
  url: 'data/algoritmos-apuntes.pdf'
}
```

4. Guarda y abre la página de la materia (por ejemplo `algoritmos.html`).

> Las páginas de materia muestran el bloque de `Material del Semestre` solo si `course.material` existe.

### Editar actividades

1. Abre `data/site-data.js`.
2. Busca `FEC_DATA.activities`.
3. Modifica o agrega tareas dentro del array del curso correspondiente.

Ejemplo:

```js
{
  type: 'tarea',
  title: 'Nuevo ejercicio',
  desc: 'Instrucciones de la tarea.',
  assigned: '13 abril 2026',
  due: '19 abril 2026',
  image: 'data/image.png'
}
```

4. Guarda y abre la página de la materia.

### Editar profesores

1. Abre `data/site-data.js`.
2. Busca `FEC_DATA.professors`.
3. Cambia o agrega entradas como:

```js
{ name: 'Eddymar Matheus', course: 'Comunicación y Lenguaje', email: 'eddymar.matheus@universidad.edu' }
```

### Editar noticias de inicio

1. Abre `data/site-data.js`.
2. Busca `FEC_DATA.news`.
3. Añade noticias u avisos con este formato:

```js
{
  tag: 'comunicado',
  content: 'Texto del comunicado.',
  date: '13 abril 2026 — 14:54'
}
```

## Preguntas frecuentes

### ¿Dónde agrego material nuevo para una materia?
En `data/site-data.js` dentro del objeto del curso correspondiente, usando la propiedad `material`.

### ¿Cómo agrego actividades para una materia?
En `data/site-data.js`, dentro de `FEC_DATA.activities.<codigo>` agrega nuevos objetos de tarea.

### ¿Qué hago si agrego un curso nuevo?
1. Agrega el curso a `FEC_DATA.courses`.
2. Agrega una entrada en `FEC_DATA.nav.subjects` si quieres que aparezca en la navegación.
3. Crea la página `.html` nueva con la misma estructura de las páginas de materia.
4. Si también hay horario, agrega una entrada a `FEC_DATA.schedule`.

### ¿Qué pasa si la página de materia no existe?
La navegación puede mostrar un enlace roto si `filename` no existe. Siempre crea el archivo `filename` que declares en el objeto del curso.

### ¿Por qué algunas páginas se actualizan al cambiar solo `data/site-data.js`?
Porque las páginas de materia leen sus datos desde `window.FEC_DATA`. Si cambias el contenido en `data/site-data.js` y recargas, las páginas usarán los nuevos datos.

### ¿Necesito tocar `styles.css`?
No para el contenido y los datos. Solo edítalo si quieres cambiar la apariencia visual del sitio.

### ¿Qué hace `grupos.html`?
Es una página de enlaces y recursos que no depende directamente de `FEC_DATA`.

## Desarrollo y pruebas

1. Guarda los cambios en `data/site-data.js`.
2. Abre la página correspondiente en el navegador.
3. Si necesitas corregir algo, edita `data/site-data.js` y vuelve a recargar.

## Commit y push

Cuando termines los cambios, usa:

```bash
git add data/site-data.js README.md index.html horario.html profesores.html comunicacion.html calculoi.html algoritmos.html logicamatematica.html orientacion.html ppi.html
git commit -m "Actualiza README y documenta el flujo de datos para todas las materias"
git push
```

## Nota importante

- `data/site-data.js` es el punto central para datos compartidos.
- Mantén la ruta `data/site-data.js` y no muevas el archivo.
- Si añades cursos nuevos, también debes proporcionar las páginas HTML que les correspondan.
