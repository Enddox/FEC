<<<<<<< HEAD
=======
# FEC

## Descripción

Repositorio estático con un frontend de datos modulares para un sitio académico. El diseño separa datos, templates y estilos para que las páginas de materia funcionen leyendo un único objeto global: `window.FEC_DATA`.

## Estructura del proyecto

- `index.html`: inicio y acceso a materias.
- `horario.html`: renderiza el horario desde datos.
- `profesores.html`: lista de profesores desde datos.
- `grupos.html`: página de enlaces a grupos y recursos.
- `calculoi.html`, `comunicacion.html`, `algoritmos.html`, `logicamatematica.html`, `orientacion.html`, `ppi.html`: templates de materia basadas en datos.
- `data/site-data.js`: modelo de datos central.
- `styles.css`: estilos compartidos.

## Arquitectura de datos

`data/site-data.js` define `window.FEC_DATA` y contiene:

- `site`: metadatos del sitio.
- `nav`: navegación principal y materias.
- `courses`: configuración de cada curso.
- `schedule`: entradas del horario semanal.
- `professors`: listado de docentes.
- `activities`: actividades por curso.
- `news`: noticias del inicio.

También expone helpers usados por las páginas:

- `FEC_GET_COURSE_BY_FILENAME(filename)`
- `FEC_GET_COURSE_LINKS()`

## Cómo se vinculan datos y páginas

- `index.html` consume `FEC_DATA.news` y `FEC_DATA.nav.subjects`.
- `horario.html` consume `FEC_DATA.schedule` y resuelve `ck` con `FEC_DATA.courses`.
- `profesores.html` consume `FEC_DATA.professors`.
- Cada página de materia carga su curso a partir de `window.FEC_GET_COURSE_BY_FILENAME(filename)`.
- Las páginas de materia renderizan:
  - datos del curso desde `FEC_DATA.courses`
  - material desde `course.material`
  - enlaces de reunión desde `course.meetingLinks`
  - actividades desde `FEC_DATA.activities[course.ck]`

## Cómo agregar un nuevo curso/materia

1. Abre `data/site-data.js`.
2. Añade el objeto del curso en `FEC_DATA.courses`.
3. Añade la materia a `FEC_DATA.nav.subjects` si quieres que aparezca en la navegación.
4. Crea la página `.html` para el curso con la misma estructura de los templates existentes.
5. Si el curso tiene horario, añade una entrada a `FEC_DATA.schedule`.
6. Si quieres actividades, crea el array `FEC_DATA.activities.<ck>`.
7. Si quieres material, agrega `course.material`.
8. Si quieres reuniones por Google Meet/Discord, agrega `course.meetingLinks`.

Ejemplo mínimo de curso:

```js
{
  ck: 'nuevo',
  filename: 'nuevo.html',
  name: 'Materia Nueva',
  pageTitle: 'Materia Nueva - I-2026',
  modalidad: 'Presencial',
  profesor: 'Nombre del docente',
  classroomCode: '#####',
  classroomUrl: 'https://classroom.google.com',
  zoomUrl: 'https://zoom.us/join',
  meetingLinks: [
    { title: 'Google Meet', url: 'https://meet.google.com/xyz-1234' },
    { title: 'Discord', url: 'https://discord.gg/abc123' }
  ]
}
```

Ejemplo de actividades:

```js
FEC_DATA.activities.nuevo = [
  {
    type: 'tarea',
    title: 'Ejercicio inicial',
    desc: 'Completa el primer conjunto de problemas.',
    assigned: '14 abril 2026',
    due: '20 abril 2026'
  }
];
```

Ejemplo de horario:

```js
FEC_DATA.schedule.push({
  d: 2,
  sh: 10,
  sm: 0,
  eh: 12,
  em: 0,
  ck: 'nuevo',
  tp: 'presencial'
});
```

## Formato de datos

### Curso (`FEC_DATA.courses`)

Cada curso es un objeto con al menos:

- `ck`: código único.
- `filename`: nombre de la página HTML.
- `name`: nombre visible de la materia.
- `pageTitle`: título de la página.
- `modalidad`: etiqueta de modalidad.
- `profesor`: nombre del docente.
- `classroomCode`, `classroomUrl`: información de Google Classroom.
- `zoomUrl`: URL de Zoom.

Opcional:

- `material`: `{ title, desc, url }`
- `meetingLinks`: array de `{ title, url }`

### Horario (`FEC_DATA.schedule`)

Cada entrada usa:

- `d`: día (0..4)
- `sh`, `sm`: hora y minuto de inicio
- `eh`, `em`: hora y minuto de fin
- `ck`: código de curso
- `tp`: tipo de clase

### Actividades (`FEC_DATA.activities`)

Cada clave es un curso y cada valor es un array de actividades:

```js
{
  type: 'tarea',
  title: 'Título de la tarea',
  desc: 'Descripción breve',
  assigned: 'fecha',
  due: 'fecha',
  image: 'ruta/opcional.png'
}
```

## FAQ para desarrolladores

1. ¿Cómo se renderiza una página de curso?
   - La página lee `window.FEC_DATA` y busca el curso por nombre de archivo con `FEC_GET_COURSE_BY_FILENAME`.

2. ¿Dónde agrego nuevos enlaces de reunión?
   - En `course.meetingLinks` dentro de `FEC_DATA.courses`.

3. ¿Qué pasa si agrego un curso en `FEC_DATA.courses` pero no creo la página HTML?
   - El enlace en la navegación quedará roto; debes crear el archivo `filename`.

4. ¿Cómo habilito un nuevo curso en la navegación?
   - Añade la materia a `FEC_DATA.nav.subjects`.

5. ¿Cómo agrego actividad a un curso?
   - Agrega un array en `FEC_DATA.activities.<ck>`.

6. ¿Cómo agrego material descargable?
   - Usa `course.material` en el objeto de curso.

7. ¿Cómo pruebo los cambios de datos?
   - Modifica `data/site-data.js`, guarda y recarga la página en el navegador.

8. ¿Cuál es el contrato entre `schedule` y `courses`?
   - `schedule` usa `ck` para enlazar cada entrada de horario con un curso de `FEC_DATA.courses`.

9. ¿Dónde debo colocar la lógica de renderizado?
   - En cada página HTML está el renderizado de su propia sección; los datos se mantienen en `data/site-data.js`.

10. ¿Cómo añado un nuevo módulo de datos o columna a la página?
    - Extiende el objeto `course` en `FEC_DATA.courses`, luego actualiza el template HTML correspondiente.

## Desarrollo y pruebas

1. Edita `data/site-data.js` para los cambios de datos.
2. Crea o actualiza la página `.html` del curso si agregas uno nuevo.
3. Abre la página en el navegador y revisa el comportamiento.

## Commit y push

```bash
git add data/site-data.js README.md index.html horario.html profesores.html comunicacion.html calculoi.html algoritmos.html logicamatematica.html orientacion.html ppi.html
git commit -m "Refactor README para enfoque de desarrollador y agregar guía para nuevos cursos"
git push
```

## Nota técnica

- `data/site-data.js` es el modelo central.
- Las páginas HTML son vistas que consumen ese modelo.
- No dupliques datos entre archivos HTML y `data/site-data.js`.
>>>>>>> ce239526d0dd52d0df10390a41b2c16f4b52ad49
