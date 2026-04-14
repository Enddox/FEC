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
      { title: 'Algoritmos y Programacion I', href: 'algoritmos.html', enabled: true, ck: 'algo' },
      { title: 'Logica Matematica', href: 'logicamatematica.html', enabled: true, ck: 'logi' },
      { title: 'Sub-Area Comunicacion', href: 'comunicacion.html', enabled: true, ck: 'comu' },
      { title: 'Orientacion I', href: 'orientacion.html', enabled: true, ck: 'orie' },
      { title: 'PPI', href: 'ppi.html', enabled: true, ck: 'ppi' }
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
    },
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
    },
    {
      ck: 'logi',
      filename: 'logicamatematica.html',
      name: 'Logica Matematica',
      pageTitle: 'Logica Matematica - I-2026',
      modalidad: 'Online',
      profesor: 'Dra. Marta Salazar',
      classroomCode: 'logi987',
      classroomUrl: 'https://classroom.google.com',
      zoomId: '######',
      zoomPass: '######',
      zoomUrl: 'https://zoom.us/join',
      whatsappUrl: 'https://chat.whatsapp.com/examplelogi',
      groupLabel: 'Grupo de WhatsApp'
    },
    {
      ck: 'orie',
      filename: 'orientacion.html',
      name: 'Orientacion I',
      pageTitle: 'Orientacion I - I-2026',
      modalidad: 'Online',
      profesor: 'Prof. Juan Hernandez',
      classroomCode: 'orie456',
      classroomUrl: 'https://classroom.google.com',
      zoomId: '######',
      zoomPass: '######',
      zoomUrl: 'https://zoom.us/join',
      whatsappUrl: 'https://chat.whatsapp.com/exampleorie',
      groupLabel: 'Grupo de WhatsApp'
    },
    {
      ck: 'ppi',
      filename: 'ppi.html',
      name: 'PPI',
      pageTitle: 'PPI - I-2026',
      modalidad: 'Online',
      profesor: 'Lic. Ana Torres',
      classroomCode: 'ppi321',
      classroomUrl: 'https://classroom.google.com',
      zoomId: '######',
      zoomPass: '######',
      zoomUrl: 'https://zoom.us/join',
      whatsappUrl: 'https://chat.whatsapp.com/exampleppi',
      groupLabel: 'Grupo de WhatsApp'
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
    calc: [
      {
        type: 'tarea',
        title: 'Ejercicios de límites',
        desc: 'Resuelve los ejercicios de límite del capítulo 2 del manual y escribe los pasos en el cuaderno.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      },
      {
        type: 'tarea',
        title: 'Problemas de derivadas',
        desc: 'Calcula derivadas de polinomios y funciones trigonométricas, y entrega las respuestas ordenadas.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      }
    ],
    algo: [
      {
        type: 'tarea',
        title: 'Pseudocódigo y diagramas de flujo',
        desc: 'Escribe el pseudocódigo y el diagrama de flujo para el algoritmo de búsqueda lineal.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      },
      {
        type: 'tarea',
        title: 'Estructura de datos básica',
        desc: 'Investiga y describe en cuaderno las diferencias entre arreglos y listas enlazadas.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      }
    ],
    logi: [
      {
        type: 'tarea',
        title: 'Tablas de verdad',
        desc: 'Realiza tablas de verdad para las proposiciones compuestas del ejercicio 4 del manual.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      },
      {
        type: 'tarea',
        title: 'Equivalencias lógicas',
        desc: 'Transforma las proposiciones dadas a su forma equivalente usando leyes de Morgan.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      }
    ],
    orie: [
      {
        type: 'tarea',
        title: 'Plan de aprendizaje',
        desc: 'Redacta tu objetivo académico para el semestre y las estrategias para alcanzarlo.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      },
      {
        type: 'tarea',
        title: 'Autoconocimiento',
        desc: 'Contesta el cuestionario de habilidades personales y reflexiona sobre tus resultados.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      }
    ],
    ppi: [
      {
        type: 'tarea',
        title: 'Idea de proyecto',
        desc: 'Propón una idea de proyecto y describe el problema que busca resolver.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      },
      {
        type: 'tarea',
        title: 'Reunión de equipo',
        desc: 'Organiza una breve agenda para la primera reunión de trabajo en equipo.',
        assigned: '13 abril 2026',
        due: '19 abril 2026'
      }
    ]
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
