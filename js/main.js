// ============ MOBILE NAV ============
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mainNav.classList.remove('open'))
);

// ============ ROTATING TITLE ============
const rotatorWords = {
  en: ['SOFTWARE ENGINEER', 'QA ENGINEER', 'BUILDER', 'STILL LEARNING'],
  es: ['INGENIERA DE SOFTWARE', 'INGENIERA QA', 'CREADORA', 'SIEMPRE APRENDIENDO'],
};
const currentLang = () => (document.documentElement.lang === 'es' ? 'es' : 'en');
const rotatorEl = document.getElementById('rotator');
let wordIndex = 0;

function rotateWord() {
  if (!rotatorEl) return;
  rotatorEl.classList.add('fade');
  setTimeout(() => {
    const words = rotatorWords[currentLang()];
    wordIndex = (wordIndex + 1) % words.length;
    rotatorEl.textContent = words[wordIndex];
    rotatorEl.classList.remove('fade');
  }, 250);
}
setInterval(rotateWord, 2000);
document.addEventListener('langchange', () => {
  if (rotatorEl) rotatorEl.textContent = rotatorWords[currentLang()][wordIndex];
});

// ============ RUNNING CAT ============
const cat = document.getElementById('running-cat');
function launchCat() {
  if (!cat) return;
  cat.classList.remove('run');
  void cat.offsetWidth; // restart animation
  cat.classList.add('run');
}
// first run after a short delay, then every 18-30s
setTimeout(launchCat, 3000);
setInterval(() => launchCat(), 18000 + Math.random() * 12000);

// ============ FOOTER YEAR ============
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============ FLIP CARDS ============
document.querySelectorAll('.flip-card').forEach(card => {
  const flip = () => {
    const flipped = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', String(flipped));
  };
  card.addEventListener('click', e => {
    if (e.target.closest('a')) return; // let links work without flipping
    flip();
  });
  card.addEventListener('keydown', e => {
    if (e.target !== card) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flip();
    }
  });
});
