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
      zoomUrl: 'https://zoom.us/join'
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
      modalidad: 'Online',
      profesor: 'Sigerist Rodríguez',
      classroomCode: 'algo123',
      classroomUrl: 'https://classroom.google.com',
      zoomUrl: 'https://zoom.us/join'
    },
    {
      ck: 'logi',
      filename: 'logicamatematica.html',
      name: 'Logica Matematica',
      pageTitle: 'Logica Matematica - I-2026',
      modalidad: 'Online',
      profesor: 'Haller Bracho',
      classroomCode: 'logi987',
      classroomUrl: 'https://classroom.google.com',
      zoomUrl: 'https://zoom.us/join'
    },
    {
      ck: 'orie',
      filename: 'orientacion.html',
      name: 'Orientacion I',
      pageTitle: 'Orientacion I - I-2026',
      modalidad: 'Online',
      profesor: 'Julieta Oquendo',
      classroomCode: 'orie456',
      classroomUrl: 'https://classroom.google.com',
      zoomUrl: 'https://zoom.us/join'
    },
    {
      ck: 'ppi',
      filename: 'ppi.html',
      name: 'PPI',
      pageTitle: 'PPI - I-2026',
      modalidad: 'Online',
      profesor: 'Carmen Barrera',
      classroomCode: 'ppi321',
      classroomUrl: 'https://classroom.google.com',
      zoomUrl: 'https://zoom.us/join'
    }
  ],
  schedule: [
    { d: 0, sh: 16, sm: 0, eh: 17, em: 30, ck: 'calc', tp: 'online' },
    { d: 0, sh: 18, sm: 0, eh: 20, em: 0, ck: 'comu', tp: 'online' },
    { d: 1, sh: 9, sm: 45, eh: 12, em: 0, ck: 'logi', tp: 'online' },
    { d: 2, sh: 8, sm: 0, eh: 9, em: 30, ck: 'algo', tp: 'online' },
    { d: 2, sh: 9, sm: 45, eh: 12, em: 0, ck: 'logi', tp: 'online' },
    { d: 2, sh: 16, sm: 0, eh: 17, em: 30, ck: 'calc', tp: 'online' },
    { d: 3, sh: 8, sm: 0, eh: 11, em: 0, ck: 'ppi', tp: 'online' },
    { d: 4, sh: 9, sm: 0, eh: 12, em: 15, ck: 'orie', tp: 'online' },
    { d: 4, sh: 16, sm: 0, eh: 17, em: 30, ck: 'calc', tp: 'online' }
  ],
  professors: [
    { name: 'Betsi De Pascal', course: 'Cálculo I', email: 'correo@mail.com', phone: '+58 412-123-4567' },
    { name: 'Eddymar Matheus', course: 'Comunicación y Lenguaje', email: 'correo@mail.com', phone: '+58 416-123-4568' },
    { name: 'Sigerist Rodríguez', course: 'Algoritmos y Programación I', email: 'correo@mail.com', phone: '+58 414-123-4569' },
    { name: 'Haller Bracho', course: 'Lógica Matemática', email: 'correo@mail.com', phone: '+58 424-123-4570' },
    { name: 'Julieta Oquendo', course: 'Orientación I', email: 'correo@mail.com', phone: '+58 412-123-4571' },
    { name: 'Carmen Barrera', course: 'PPI', email: 'correo@mail.com', phone: '+58 426-123-4572' }
  ],
  activities: {
    calc: [
      {
        type: 'opcional',
        title: 'Ejercicios de Repaso',
        desc: 'Realizar los ejercicios de repaso que se encuentran en el PDF de Google Classroom.',
        assigned: '15 abril 2026',
        due: '17 abril 2026'
      }
    ],
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
    algo: [
      {
        type: 'instalacion',
        title: 'Instalar IDE C++',
        desc: 'Descargar el IDE C++ y tenerlo listo para la proxima clase. para los que no saben cual descargar aqui les dejo los links, y tambien para el que no tenga pc existe una alternativa para android, pero por favor conseguir una PC-Laptop pronto ya que programar en android es bien molesto.<br><br><strong>Code::Blocks</strong><br><br>Windows 64 bits:<br><a href="https://dappcdn.com/download/devtools/code-blocks?get=codeblocks-25.03mingw-setup.exe" target="_blank" style="color: #06b6d4; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.color=\'#22c55e\'; this.style.transform=\'scale(1.1)\'" onmouseout="this.style.color=\'#06b6d4\'; this.style.transform=\'scale(1)\'">https://dappcdn.com/download/devtools/code-blocks?get=codeblocks-25.03mingw-setup.exe</a><br><br>Windows 32 bits:<br><a href="https://dappcdn.com/download/devtools/code-blocks?get=codeblocks-25.03mingw-32bit-setup.exe" target="_blank" style="color: #06b6d4; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.color=\'#22c55e\'; this.style.transform=\'scale(1.1)\'" onmouseout="this.style.color=\'#06b6d4\'; this.style.transform=\'scale(1)\'">https://dappcdn.com/download/devtools/code-blocks?get=codeblocks-25.03mingw-32bit-setup.exe</a><br><br>Android:<br><a href="https://play.google.com/store/apps/details?id=ru.iiec.cxxdroid" target="_blank" style="color: #06b6d4; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.color=\'#22c55e\'; this.style.transform=\'scale(1.1)\'" onmouseout="this.style.color=\'#06b6d4\'; this.style.transform=\'scale(1)\'">https://play.google.com/store/apps/details?id=ru.iiec.cxxdroid</a><br><br>MacOS 11.7 o superior:<br><a href="https://dappcdn.com/download/devtools/code-blocks?get=CodeBlocks-25.03_macOS-11.7_x64-wx3.2.6.dmg" target="_blank" style="color: #06b6d4; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.color=\'#22c55e\'; this.style.transform=\'scale(1.1)\'" onmouseout="this.style.color=\'#06b6d4\'; this.style.transform=\'scale(1)\'">https://dappcdn.com/download/devtools/code-blocks?get=CodeBlocks-25.03_macOS-11.7_x64-wx3.2.6.dmg</a>',
        assigned: '15 abril 2026'
      }
    ],
    orie: [
      {
        type: 'investigacion',
        title: 'Investigación sobre LUZ y FEC',
        desc: 'Para su clase de la próxima semana deberán investigar los siguientes puntos: <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Historia de la Universidad del Zulia</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Autoridades actuales de LUZ</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Historia de la Facultad Experimental de Ciencias</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Autoridades actuales de FEC</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Deberes y derechos del estudiante universitario</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Reglamento de evaluación y rendimiento estudiantil de LUZ</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Premios y reconocimientos de la Secretaria de LUZ (para estudiantes)</span> <span style="color: #0891b2; text-shadow: 0 0 10px rgba(8, 145, 178, 0.5);">- Servicios de DIDSE</span>. En la página web de la universidad pueden encontrar toda la información, no es necesario que lleven ningún material impreso, solo investigar y leer, quienes lo deseen pueden llevar sus apuntes en sus cuadernos.',
        assigned: '15 abril 2026',
        due: '24 abril 2026'
      }
    ]
  },
  news: [
    {
      tag: 'comunicado',
      content: 'Clases de PPI hoy 16 de abril serán a las 8:00 PM.',
      date: '16 abril 2026 - 11:41'
    }
  ],
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
