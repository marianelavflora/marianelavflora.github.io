// Page text that isn't part of a data list: nav, section titles, labels.
// English and Spanish side by side. Values may contain HTML (e.g. <br/>).
import type { Text } from '.';

export const ui = {
  nav: {
    music: { en: 'Music', es: 'Música' },
    projects: { en: 'Projects', es: 'Proyectos' },
    experience: { en: 'Experience', es: 'Experiencia' },
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
  projects: {
    kicker: { en: '03 — things I\'ve built, won &amp; organized', es: '03 — cosas que armé, gané y organicé' },
    title: { en: 'Projects &amp; Achievements', es: 'Proyectos y Logros' },
    hint: {
      en: 'Hackathons, gamejams, personal projects and moments with amazing people',
      es: 'Hackatones, gamejams, proyectos personales y momentos con gente increíble',
    },
    flipHint: {
      en: '↻ Click any card to flip it: the event is on the front, what we built is on the back.',
      es: '↻ Hacé click en cualquier card para darla vuelta: adelante está el evento, atrás lo que construimos.',
    },
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
  exp: {
    kicker: { en: '04 — where I\'ve worked', es: '04 — dónde trabajé' },
    title: { en: 'Experience', es: 'Experiencia' },
    volunteering: { en: 'Volunteering', es: 'Voluntariados' },
  },
  stack: {
    kicker: { en: '05 — what I work with', es: '05 — con qué laburo' },
    title: { en: 'Stack &amp; Toolbox', es: 'Stack y herramientas' },
  },
  life: {
    kicker: { en: '06 — some of my life', es: '06 — algo de mi vida' },
    title: { en: 'A Little Bit of Me', es: 'Un Poquito de Mí' },
    hint: { en: 'The non-work version of the story 💛', es: 'La versión de la historia fuera del laburo 💛' },
  },
  certs: {
    kicker: { en: '07 — paper trail', es: '07 — los papeles' },
    title: { en: 'Certifications', es: 'Certificaciones' },
  },
  footer: {
    quote: { en: 'Life\'s a climb,<br/>but the view is great.', es: 'La vida es una escalada,<br/>pero la vista es hermosa.' },
    built: { en: 'Built with way too much coffee.', es: 'Hecho con demasiado café.' },
  },
} satisfies Record<string, Text | Record<string, Text>>;
