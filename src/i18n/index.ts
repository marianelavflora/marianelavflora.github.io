// The site is English-first: English is rendered into the HTML and the
// Spanish version rides along in a data-es attribute on the same element.
// src/scripts/i18n.js swaps between the two when the EN/ES toggle is used.

export type Text = string | { en: string; es: string };

/** The English version of a text. */
export const en = (t: Text) => (typeof t === 'string' ? t : t.en);

/** Spread onto an element to make it translatable: {...es(text)}. */
export const es = (t: Text): Record<string, string> =>
  typeof t === 'string' ? {} : { 'data-es': t.es };

const MONTHS = {
  short: {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Junio', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  },
  long: {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  },
};

const split = (ym: string) => {
  const [year, month] = ym.split('-');
  return { year, index: Number(month) - 1 };
};

/** "June 2025" style label. */
export function monthYear(ym: string, style: 'short' | 'long' = 'short') {
  const { year, index } = split(ym);
  return {
    en: `${MONTHS[style].en[index]} ${year}`,
    es: `${MONTHS[style].es[index]} ${year}`,
  };
}

/** "Jan 2025 – June 2025", or "Apr 2026 – Present" when there's no end. */
export function dateRange(start: string, end: string | null): Text {
  const from = monthYear(start);
  const to = end ? monthYear(end) : { en: 'Present', es: 'Actualidad' };
  return { en: `${from.en} – ${to.en}`, es: `${from.es} – ${to.es}` };
}

type Ordered = { data: { order: number } };

/** Entries in the same order as their YAML file. */
export const fileOrder = <T extends Ordered>(items: T[]) =>
  [...items].sort((a, b) => a.data.order - b.data.order);

/** Newest first by a YYYY-MM field; entries with the same month keep their file order. */
export const newestFirst = <T extends Ordered>(items: T[], date: (item: T) => string) =>
  fileOrder(items).sort((a, b) => date(b).localeCompare(date(a)));
