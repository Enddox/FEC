# FEC

## Descripción

Este proyecto es una mini página de información académica para la sección I-2026 de Licenciatura en Computación. Ahora el sitio usa una arquitectura modular de datos para que puedas editar horarios, materias, actividades, profesores y noticias desde un único archivo de datos.

## Arquitectura modular

Los datos compartidos están centralizados en:

- `data/site-data.js`

Ese archivo define `window.FEC_DATA` y contiene:

- `site`: datos generales del sitio
- `nav`: navegación principal y materias disponibles
- `courses`: lista de cursos y enlaces de páginas
- `schedule`: horario semanal con tiempos y enlaces automáticos
- `professors`: lista de profesores y cursos
- `activities`: actividades por curso
- `news`: noticias y comunicados que se muestran en `index.html`

## Qué archivos alimenta

- `index.html`: carga noticias dinámicas desde `FEC_DATA.news`
- `horario.html`: dibuja el horario desde `FEC_DATA.schedule` y enlaza cada materia usando `FEC_DATA.courses`
- `profesores.html`: muestra la lista de profesores desde `FEC_DATA.professors`
- `comunicacion.html`: muestra actividades desde `FEC_DATA.activities.comu`

## Cómo editar datos

### Editar horarios

1. Abre `data/site-data.js`
2. Busca `FEC_DATA.schedule`
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

1. Abre `data/site-data.js`
2. Busca `FEC_DATA.courses`
3. Añade o edita un objeto de curso.

Ejemplo:

```js
{
  ck: 'algo',
  filename: 'algoritmos.html',
  name: 'Algoritmos y Programacion I',
  pageTitle: 'Algoritmos y Programacion I - I-2026',
  modalidad: 'Presencial',
  profesor: 'Nombre del profesor',
  classroomCode: '#####',
  classroomUrl: 'https://classroom.google.com',
  zoomId: '#####',
  zoomPass: '#####',
  zoomUrl: 'https://zoom.us/join',
  whatsappUrl: 'https://chat.whatsapp.com/...',
  groupLabel: 'Grupo de WhatsApp'
}
```

4. Si agregas un curso nuevo, crea también la página `.html` correspondiente o deja el enlace en `#`.

### Editar profesores

1. Abre `data/site-data.js`
2. Busca `FEC_DATA.professors`
3. Cambia o agrega entradas como:

```js
{ name: 'Eddymar Matheus', course: 'Comunicación y Lenguaje', email: 'eddymar.matheus@universidad.edu' }
```

### Editar actividades

1. Abre `data/site-data.js`
2. Busca `FEC_DATA.activities`
3. Actualiza el array de `comu` u otro curso.

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

### Editar noticias de inicio

1. Abre `data/site-data.js`
2. Busca `FEC_DATA.news`
3. Añade noticias u avisos con este formato:

```js
{
  tag: 'comunicado',
  content: 'Texto del comunicado.',
  date: '13 abril 2026 — 14:54'
}
```

## Desarrollo y pruebas

1. Guarda los cambios en `data/site-data.js`.
2. Abre la página correspondiente en el navegador.
3. Si necesitas corregir algo, edita `data/site-data.js` y vuelve a recargar.

## Commit y push

Cuando termines los cambios, usa:

```bash
git add data/site-data.js index.html horario.html profesores.html comunicacion.html
git commit -m "Modulariza datos y actualiza contenido"
git push
```

## Nota importante

- `data/site-data.js` es el punto central para datos compartidos.
- Mantén la ruta `data/site-data.js` y no muevas el archivo.
- Si añades cursos nuevos, también debes proporcionar las páginas HTML que les correspondan.
