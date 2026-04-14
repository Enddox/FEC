window.FEC_DATA = {
  site: {
    title: 'Sistema Academico',
    degree: 'Lic. Computacion',
    semester: '1er. Semestre',
    section: 'Seccion 2',
    period: 'I-2026'
  },
  nav: {
    main: [
      { title: 'Horario', href: 'horario.html' },
      { title: 'Grupos', href: 'grupos.html' },
      { title: 'Profesores', href: 'profesores.html' }
    ],
    subjects: [
      { title: 'Calculo I', href: 'calculoi.html', enabled: true, ck: 'calc' },
      { title: 'Algoritmos y Programacion I', href: 'algoritmos.html', enabled: false, ck: 'algo' },
      { title: 'Logica Matematica', href: 'logicamatematica.html', enabled: false, ck: 'logi' },
      { title: 'Sub-Area Comunicacion', href: 'comunicacion.html', enabled: true, ck: 'comu' },
      { title: 'Orientacion I', href: 'orientacion.html', enabled: false, ck: 'orie' },
      { title: 'PPI', href: 'ppi.html', enabled: false, ck: 'ppi' }
    ]
  },
  courses: [
    {
      ck: 'calc',
      filename: 'calculoi.html',
      name: 'Cálculo I',
      pageTitle: 'Calculo I - I-2026',
      modalidad: 'Online',
      profesor: 'Betsi De Pascal',
      classroomCode: '4nmacc2h',
      classroomUrl: 'https://classroom.google.com',
      zoomId: '86303507525',
      zoomPass: '4ua8xi',
      zoomUrl: 'https://zoom.us/join',
      whatsappUrl: 'https://chat.whatsapp.com/I6s368JjVsv5eWfm4rXhM3?mode=gi_t',
      groupLabel: 'Grupo de WhatsApp'
    },
    {
      ck: 'comu',
      filename: 'comunicacion.html',
      name: 'Sub-Area Comunicación y Lenguaje',
      pageTitle: 'Sub-Area Comunicacion - I-2026',
      modalidad: 'Online / Presencial',
      profesor: 'Eddymar Matheus',
      classroomCode: '########',
      classroomUrl: 'https://classroom.google.com',
      zoomId: '###########',
      zoomPass: '######',
      zoomUrl: 'https://zoom.us/join',
      whatsappUrl: 'https://chat.whatsapp.com/DZBTbi2rdvkAww3Iy4US5C?mode=gi_t',
      groupLabel: 'Grupo de WhatsApp',
      material: {
        title: 'Manual de Lenguaje y Comunicacion (PDF)',
        desc: 'Material base del semestre.',
        url: 'data/Manual EUS Lenguaje y Comunicación..pdf'
      }
    }
  ],
  schedule: [
    { d: 0, sh: 14, sm: 45, eh: 16, em: 45, ck: 'calc', tp: 'online' },
    { d: 0, sh: 18, sm: 0, eh: 20, em: 0, ck: 'comu', tp: 'online' },
    { d: 1, sh: 9, sm: 0, eh: 11, em: 0, ck: 'logi', tp: 'online' },
    { d: 2, sh: 8, sm: 0, eh: 9, em: 30, ck: 'algo', tp: 'presencial' },
    { d: 2, sh: 9, sm: 30, eh: 11, em: 0, ck: 'logi', tp: 'online' },
    { d: 3, sh: 8, sm: 0, eh: 11, em: 0, ck: 'ppi', tp: 'online' },
    { d: 4, sh: 9, sm: 0, eh: 12, em: 15, ck: 'orie', tp: 'online' },
    { d: 4, sh: 14, sm: 0, eh: 16, em: 45, ck: 'calc', tp: 'online' }
  ],
  professors: [
    { name: 'Betsi De Pascal', course: 'Cálculo I', email: 'betsi.depascal@universidad.edu' },
    { name: 'Eddymar Matheus', course: 'Comunicación y Lenguaje', email: 'eddymar.matheus@universidad.edu' }
  ],
  activities: {
    comu: [
      {
        type: 'tarea',
        title: 'Analisis de la gráfica del manual',
        desc: 'Explicar con sus propias palabras como se conectan los elementos en la gráfica que aparece dentro del manual. (Realizar en cuaderno).',
        assigned: '13 abril 2026',
        due: '19 abril 2026',
        image: 'data/image.png',
        material: 'Material del semestre'
      },
      {
        type: 'tarea',
        title: 'Investigacion de Autores',
        desc: 'Elaborar una breve reseña sobre la trayectoria y los aportes a la lingüística de Ferdinand de Saussure, Lev Vygotsky y Noam Chomsky. (Realizar en cuaderno).',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      }
    ],
    calc: []
  },
  news: [
    {
      tag: 'comunicado',
      content: 'La docente Eddymar Matheus informa que la primera clase de Comunicación y Lenguaje será hoy de 18:00 a 20:00, dictada por el Grupo de WhatsApp.',
      date: '13 abril 2026 — 14:54'
    },
    {
      tag: 'comunicado',
      content: 'Atención los estudiantes de la sección 2 del primer semestre: la materia Algoritmos y Programación I se dará de manera presencial en Grano de Oro el día miércoles de 8:00AM a 9:30AM. Además, la materia de la Subárea de Comunicación y Lenguaje del día lunes, que es a distancia, se dará de 6:00PM a 7:30PM.',
      date: '13 abril 2026 — 13:58'
    },
    {
      tag: 'aviso',
      content: 'La clase del día de hoy de Calculo I será suspendida.',
      date: '13 abril 2026 — 13:46'
    }
  ]
};

window.FEC_GET_COURSE_BY_CK = function (ck) {
  return window.FEC_DATA.courses.find((course) => course.ck === ck);
};

window.FEC_GET_COURSE_BY_FILENAME = function (filename) {
  return window.FEC_DATA.courses.find((course) => course.filename === filename);
};

window.FEC_GET_COURSE_LINKS = function () {
  return window.FEC_DATA.courses.reduce((links, course) => {
    links[course.ck] = course.filename;
    return links;
  }, {});
};
