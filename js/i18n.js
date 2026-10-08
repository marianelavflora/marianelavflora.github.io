// ============ LANGUAGE TOGGLE (EN / ES) ============
// English lives in the HTML. Elements with data-i18n="key" get their
// Spanish text from ES below; the original English is kept in memory so
// switching back is instant. The choice is remembered in localStorage.
const ES = {
  'nav.music': 'Música',
  'nav.projects': 'Proyectos',
  'nav.work': 'Trabajo',
  'nav.experience': 'Experiencia',
  'nav.life': 'Vida',
  'nav.certs': 'Certificaciones',
  'nav.cv': 'Ver CV',

  'hero.eyebrow': 'La reputación sigue a tu trabajo.',
  'hero.title': 'HOLA, SOY <span class="outline">MaVi</span><br/>Y SOY',
  'hero.sub': 'Software · QA Engineer · Fan de la robótica · Construyendo y rompiendo cosas a propósito, desde Córdoba, Argentina.',
  'hero.caption': 'Acá con Gaucho de Paisanos',

  'music.kicker': '02 — mientras navegás',
  'music.title': '¿Te pongo un poco de música?',
  'music.note': '🎵 6 temas cargados y listos — dale play.',

  'projects.kicker': '03 — cosas que armé, gané y organicé',
  'projects.title': 'Proyectos y Logros',
  'projects.hint': 'Hackatones, gamejams y un poco de facu 💛',
  'projects.flipHint': '↻ Hacé click en cualquier card para darla vuelta: adelante está el evento, atrás lo que construimos.',

  'common.photoSoon': 'foto próximamente',
  'common.product': 'El producto',
  'common.outcome': 'Lo que me dejó',
  'common.role': 'Mi rol',
  'common.productSoon': 'Lo que construyamos va a aparecer acá pronto 🚧',
  'common.comingSoon': 'Próximamente',
  'common.wip': 'En progreso',
  'common.first': '1er puesto',
  'common.third': '3er puesto',

  'elcono.front': 'Un robot que estoy haciendo para la oficina del laburo.',
  'elcono.meta': 'ESP32 · En progreso',
  'elcono.back': 'Un robot que estoy armando con una ESP32, basado en Dou. Su laburo: vivir en la oficina y tirarle chistes a mis compañeros.',

  'nasa.tag': 'Hackatón · Próximamente',
  'nasa.front': 'Voy a participar en la hackatón NASA Space Apps. ¡Pronto más info!',

  'aor.tag': 'Hackatón · En progreso',
  'aor.front': 'Estoy participando en la hackatón AgentsOnRails. ¡Atentos!',

  'santex.tag': 'Hackatón · 1er puesto',
  'santex.front': '¡Mi primera hackatón! En vez de codear, más que nada compartí mates con mis compañeros y le presenté nuestro producto al público.',
  'santex.backTitle': 'Chatbot de logística con IA',
  'santex.back': 'Un chatbot con IA + un MCP web que simulaba la gestión de la logística de Santex.',

  'chevoz.tag': 'Hackatón · 3er puesto',
  'chevoz.front': 'Participé como frontend dev y nuestro equipo salió tercero.',
  'chevoz.back': 'Un asistente de voz que detecta la ubicación de tu cliente y activa un agente que habla en su dialecto regional.',

  'vibe.tag': 'Hackatón · Participante',
  'vibe.front': 'Participé en la hackatón Vibe a Startup en Buenos Aires.',
  'vibe.back': 'Lo que más me gustó de esta fue el efecto mariposa que tuvo en mi vida: conocí gente re copada y terminé invitada a mentorear y ayudar a organizar el capítulo Córdoba de Aleph Hackathon.',

  'aleph.tag': 'Hackatón · Organizadora y mentora',
  'aleph.front': 'Organizadora y mentora en el capítulo Córdoba de Aleph Hackathon.',
  'aleph.back': 'Ayudé a organizar y mentoreé equipos en el capítulo Córdoba de Aleph Hackathon.',

  'damian.front': 'Participé de la Córdoba GameJam con mis compañeros de EPAM.',
  'damian.back': 'Un juego hecho en Godot, donde participé como game dev.',

  'chubby.front': 'Mi segunda gamejam, junto a mis compañeros Joaquín Giménez y Agustín Godoy.',
  'chubby.back': 'Ayudé a desarrollar las primeras features en Godot de este juego. Todo el crédito para mis compañeros Joaquín Giménez y Agustín Godoy.',

  'dou.tag': 'Hackatón · Premio de la Comunidad',
  'dou.meta': 'Premio de la Comunidad',
  'dou.front': 'Participé en Paisanos Hackware, donde Dou ganó el Premio de la Comunidad.',
  'dou.back': 'Un anti-Tamagotchi. Diseñé e implementé sus features y su electrónica.',

  'work.kicker': '04 — algo de mi trabajo',
  'work.title': 'Algo de Mi Trabajo',
  'work.hint': 'Un vistazo a lo que hago día a día — cambiá por capturas reales cuando quieras 💛',
  'work.tag': 'Muestra de trabajo',
  'work.bug': 'Breve descripción de un artefacto de testing, dashboard o flujo del que estés orgullosa.',
  'work.robot': 'Una foto o clip de un proyecto de hardware/software que entregaste.',
  'work.anotherTitle': '[ Agregá otra muestra ]',
  'work.another': 'Espacio extra para cualquier cosa que valga la pena mostrar: código, docs, un link a una demo.',

  'exp.kicker': '05 — dónde trabajé',
  'exp.title': 'Experiencia',
  'exp.t1': 'Junior Software Testing Engineer',
  'exp.t2': 'QA Tester',
  'exp.t3': 'Pasante de Desarrollo de Software en Robótica',
  'exp.t4': 'Pasante del Taller de Robótica y Programación',
  'exp.indep': 'Independiente — UTest, GameTester, TestIO',
  'exp.d1': 'Junio 2025 – Actualidad',
  'exp.d2': 'Ene 2025 – Junio 2025',
  'exp.d3': 'Feb 2025 – Junio 2025',
  'exp.d4': 'Ago 2024 – Feb 2025',
  'exp.remote': 'Remoto',

  'life.kicker': '06 — algo de mi vida',
  'life.title': 'Un Poquito de Mí',
  'life.hint': 'La versión de la historia fuera del laburo 💛',
  'life.rootsTag': 'Raíces',
  'life.roots': 'Nací en Villa Ángela, Chaco, una ciudad chiquita en el medio de la nada (casi literal). Mi familia sigue viviendo ahí y siempre vuelvo a visitarlos.',
  'life.moveTag': 'Nuevo Capítulo',
  'life.moveTitle': 'La Mudanza a Córdoba',
  'life.move': 'En 2021 me mudé a Córdoba para estudiar Ingeniería en Computación. Pasar de un pueblo chico a una ciudad grande donde no conocía a nadie, a los 18, fue medio difícil.',
  'life.babyTag': 'Recuerdo',
  'life.babyTitle': 'Era de Bebé Ingeniera',
  'life.baby': 'No nací frente a una compu, pero estuve cerca. Acá una foto con mi hermano de cuando era bebé.',
  'life.friendsTag': 'Amigos',
  'life.friendsTitle': 'Sidequests Con Mi Gente',
  'life.friends': 'Amo a mis amigos y salir de sidequests con ellos: los mejores planes suelen ser los que nadie planeó.',
  'life.ongoing': 'En curso',
  'life.hobbiesTag': 'Hobbies',
  'life.hobbiesTitle': 'Deporte, Jardinería y Café',
  'life.hobbies': 'Me encantan el deporte y la jardinería, y soy amante del café (o adicta, más bien).',
  'life.everyday': 'Todos los días',

  'certs.kicker': '07 — los papeles',
  'certs.title': 'Certificaciones',
  'certs.accenture': 'Capacitación en QA Manual y Automation',
  'certs.d1': 'Mayo 2026',
  'certs.d2': 'Junio 2025',
  'certs.d3': 'Abril 2025',
  'certs.d4': 'Octubre 2023',
  'certs.d5': 'Diciembre 2021',

  'footer.quote': 'La vida es una escalada,<br/>pero la vista es hermosa.',
  'footer.built': 'Hecho con demasiado café.',
};

const LANG_KEY = 'mavi-lang';
const i18nEls = document.querySelectorAll('[data-i18n]');
i18nEls.forEach(el => { el.dataset.i18nEn = el.innerHTML; });

function applyLang(lang) {
  if (lang !== 'es') lang = 'en';
  i18nEls.forEach(el => {
    const es = ES[el.dataset.i18n];
    el.innerHTML = lang === 'es' && es ? es : el.dataset.i18nEn;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle [data-lang]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function savedLang() {
  try { return localStorage.getItem(LANG_KEY); } catch { return null; }
}

document.querySelectorAll('.lang-toggle [data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch {}
    applyLang(lang);
  });
});

applyLang(savedLang() || 'en');
