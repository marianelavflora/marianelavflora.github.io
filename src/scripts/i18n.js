// ============ LANGUAGE TOGGLE (EN / ES) ============
// English is rendered into the HTML. Every translatable element carries its
// Spanish version in a data-es attribute (filled at build time from the
// src/data/*.yaml files and src/i18n/ui.ts). The original English is kept in
// memory so switching back is instant. The choice is remembered in localStorage.
const LANG_KEY = 'mavi-lang';
const i18nEls = document.querySelectorAll('[data-es]');
i18nEls.forEach(el => { el.dataset.en = el.innerHTML; });

function applyLang(lang) {
  if (lang !== 'es') lang = 'en';
  i18nEls.forEach(el => {
    el.innerHTML = lang === 'es' ? el.dataset.es : el.dataset.en;
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
