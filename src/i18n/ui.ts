// Page text that isn't part of a data list: nav, section titles, labels.
// English and Spanish side by side. Values may contain HTML (e.g. <br/>).
import type { Text } from '.';

export const ui = {
  nav: {
    music: { en: 'Music', es: 'Música' },
    journey: { en: 'Journey', es: 'Recorrido' },
    stack: 'Stack',
    life: { en: 'Life', es: 'Vida' },
    certs: { en: 'Certifications', es: 'Certificaciones' },
    cv: { en: 'View CV', es: 'Ver CV' },
  },
  hero: {
    eyebrow: { en: 'Reputation will follow your work.', es: 'La reputación sigue a tu trabajo.' },
    title: {
      en: `HEY, I'M <span class="outline">MaVi</span><br/>\n        AND I'M`,
      es: 'HOLA, SOY <span class="outline">MaVi</span><br/>Y SOY',
    },
    sub: {
      en: 'Software · QA Engineer · Robotics tinkerer · Building &amp; breaking things on purpose, from Córdoba, Argentina.',
      es: 'Software · QA Engineer · Fan de la robótica · Construyendo y rompiendo cosas a propósito, desde Córdoba, Argentina.',
    },
    caption: { en: 'Here with Gaucho from Paisanos', es: 'Acá con Gaucho de Paisanos' },
  },
  music: {
    kicker: { en: '02 — while you browse', es: '02 — mientras navegás' },
    title: { en: 'May I interest you in some music?', es: '¿Te pongo un poco de música?' },
    note: { en: '🎵 6 songs queued up, hit play.', es: '🎵 6 temas en la cola, dale play.' },
    open: { en: 'Not loading? Open it on YouTube ↗', es: '¿No carga? Abrila en YouTube ↗' },
  },
  journey: {
    kicker: { en: '03 — the journey so far', es: '03 — el recorrido hasta ahora' },
    title: { en: 'Projects, Work &amp; Milestones', es: 'Proyectos, Laburo e Hitos' },
    hint: {
      en: 'Hackathons, gamejams, jobs, volunteering and certifications, all in one line',
      es: 'Hackatones, gamejams, trabajos, voluntariados y certificaciones, todo en una línea',
    },
    flipHint: {
      en: '↻ Click any project to flip it: the event is on the front, what we built is on the back.',
      es: '↻ Hacé click en cualquier proyecto para darlo vuelta: adelante está el evento, atrás lo que construimos.',
    },
    filter: {
      all: { en: 'All', es: 'Todo' },
      project: { en: 'Projects', es: 'Proyectos' },
      job: { en: 'Work', es: 'Trabajo' },
      volunteering: { en: 'Volunteering', es: 'Voluntariados' },
      cert: { en: 'Certifications', es: 'Certificaciones' },
    },
    kind: {
      job: { en: 'Work', es: 'Trabajo' },
      volunteering: { en: 'Volunteering', es: 'Voluntariado' },
      cert: { en: 'Certification', es: 'Certificación' },
    },
    now: { en: 'Now', es: 'Hoy' },
  },
  type: {
    hackathon: { en: 'Hackathon', es: 'Hackatón' },
    gamejam: 'GameJam',
    robot: 'Robot',
  },
  back: {
    product: { en: 'The product', es: 'El producto' },
    role: { en: 'My role', es: 'Mi rol' },
    outcome: { en: 'What came out of it', es: 'Lo que me dejó' },
  },
  photoSoon: { en: 'photo coming soon', es: 'foto próximamente' },
  productPhotoSoon: { en: 'product photo coming soon', es: 'foto del producto próximamente' },
  stack: {
    kicker: { en: '04 — what I work with', es: '04 — con qué laburo' },
    title: { en: 'Stack &amp; Toolbox', es: 'Stack y herramientas' },
  },
  life: {
    kicker: { en: '05 — some of my life', es: '05 — algo de mi vida' },
    title: { en: 'A Little Bit of Me', es: 'Un Poquito de Mí' },
    hint: { en: 'The non-work version of the story 💛', es: 'La versión de la historia fuera del laburo 💛' },
  },
  certs: {
    kicker: { en: '06 — paper trail', es: '06 — los papeles' },
    title: { en: 'Certifications', es: 'Certificaciones' },
  },
  footer: {
    quote: { en: 'Life\'s a climb,<br/>but the view is great.', es: 'La vida es una escalada,<br/>pero la vista es hermosa.' },
    built: { en: 'Built with way too much coffee.', es: 'Hecho con demasiado café.' },
  },
} satisfies Record<string, Text | Record<string, Text>>;
