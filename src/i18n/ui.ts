// Page text that isn't part of a data list: nav, section titles, labels.
// English and Spanish side by side. Values may contain HTML (e.g. <br/>).
import type { Text } from '.';

export const ui = {
  nav: {
    journey: { en: 'Journey', es: 'Recorrido' },
    stack: 'Stack',
    life: { en: 'Life', es: 'Vida' },
    cv: { en: 'View CV', es: 'Ver CV' },
  },
  hero: {
    eyebrow: { en: 'Reputation will follow your work.', es: 'La reputación sigue a tu trabajo.' },
    title: {
      en: `HEY, I'M <span class="outline">MaVi</span><br/>\n        AND I'M`,
      es: 'HOLA, SOY <span class="outline">MaVi</span><br/>Y SOY',
    },
    sub: {
      en: 'Software Dev · QA Engineer · Robotics tinkerer · Building &amp; breaking things on purpose. In Córdoba, Argentina.',
      es: 'Software Dev · QA Engineer · Fan de la robótica · Construyendo y rompiendo cosas a propósito. En Córdoba, Argentina.',
    },
    caption: { en: 'Here with Gaucho from Paisanos', es: 'Acá con Gaucho de Paisanos' },
    gauchoX: { en: 'Follow Gaucho on X!', es: '¡Seguí a Gaucho en X!' },
  },
  music: {
    label: { en: '🎵 While you browse', es: '🎵 Mientras navegás' },
  },
  journey: {
    kicker: { en: '02 — the journey so far', es: '02 — el recorrido hasta ahora' },
    title: { en: 'Projects, Work &amp; Milestones', es: 'Proyectos, Laburo e Hitos' },
    hint: {
      en: 'Hackathons, gamejams, jobs, volunteering, certifications, studies and life, all in one line',
      es: 'Hackatones, gamejams, trabajos, voluntariados, certificaciones, estudios y vida, todo en una línea',
    },
    photoHint: {
      en: '📷 Each project shows the event and what we built. Click a photo to see it big.',
      es: '📷 Cada proyecto muestra el evento y lo que construimos. Hacé click en una foto para verla en grande.',
    },
    filter: {
      show: { en: 'Show:', es: 'Mostrar:' },
      all: { en: 'Show all', es: 'Mostrar todo' },
      project: { en: 'Projects', es: 'Proyectos' },
      job: { en: 'Work', es: 'Trabajo' },
      volunteering: { en: 'Volunteering', es: 'Voluntariados' },
      cert: { en: 'Certifications', es: 'Certificaciones' },
      education: { en: 'Education', es: 'Educación' },
      life: { en: 'Life', es: 'Vida' },
    },
    kind: {
      job: { en: 'Work', es: 'Trabajo' },
      volunteering: { en: 'Volunteering', es: 'Voluntariado' },
      cert: { en: 'Certification', es: 'Certificación' },
      education: { en: 'Education', es: 'Educación' },
      life: { en: 'Life', es: 'Vida' },
    },
    lanes: {
      job: { en: 'Work', es: 'Laburo' },
      volunteering: { en: 'Volunteering', es: 'Voluntariado' },
      all: { en: 'Everything', es: 'Todo' },
    },
    now: { en: 'Now', es: 'Hoy' },
    studying: { en: 'In progress', es: 'Cursando' },
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
  eventPhoto: { en: 'The event', es: 'El evento' },

  stack: {
    kicker: { en: '03 — what I work with', es: '03 — con qué laburo' },
    title: { en: 'Stack &amp; Toolbox', es: 'Stack y herramientas' },
  },
  life: {
    kicker: { en: '04 — some of my life', es: '04 — algo de mi vida' },
    title: { en: 'A Little Bit of Me', es: 'Un Poquito de Mí' },
    hint: { en: 'The non-work version of the story 💛', es: 'La versión de la historia fuera del laburo 💛' },
  },
  footer: {
    quote: { en: 'Life\'s a climb,<br/>but the view is great.', es: 'La vida es una escalada,<br/>pero la vista es hermosa.' },
    built: { en: 'Built with way too much coffee.', es: 'Hecho con demasiado café.' },
  },
} satisfies Record<string, Text | Record<string, Text>>;
