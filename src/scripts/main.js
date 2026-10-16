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

// ============ PROJECT PHOTOS ============
// Each project card holds two photos (event + product) that swap every few
// seconds; hovering or focusing the card pauses it, and the arrows switch by hand. Clicking a real photo
// opens it big in the lightbox, where the arrows go between the two.
const PHOTO_SWAP_MS = 3000;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('[data-photos]').forEach(box => {
  const slides = [...box.querySelectorAll('.card-photo')];
  const dots = [...box.querySelectorAll('.card-photo-dots i')];
  let current = 0;
  let paused = false;
  const show = i => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, j) => s.classList.toggle('active', j === current));
    dots.forEach((d, j) => d.classList.toggle('active', j === current));
  };
  box.addEventListener('mouseenter', () => { paused = true; });
  box.addEventListener('mouseleave', () => { paused = false; });
  box.addEventListener('focusin', () => { paused = true; });
  box.addEventListener('focusout', () => { paused = false; });
  // the arrows switch by hand and restart the countdown, so the photo you
  // picked stays up for the full interval
  let timer;
  const restart = () => {
    clearInterval(timer);
    if (reduceMotion || slides.length < 2) return;
    timer = setInterval(() => { if (!paused && !document.hidden) show(current + 1); }, PHOTO_SWAP_MS);
  };
  box.querySelectorAll('[data-photo-step]').forEach(btn =>
    btn.addEventListener('click', () => { show(current + Number(btn.dataset.photoStep)); restart(); }));
  restart();
});

const lightbox = document.getElementById('photo-lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const lbCaption = lightbox.querySelector('figcaption');
  let photos = [];
  let index = 0;
  const showPhoto = i => {
    index = (i + photos.length) % photos.length;
    const btn = photos[index];
    const img = btn.querySelector('img');
    lbImg.src = btn.dataset.full;
    lbImg.alt = img.alt;
    lbCaption.textContent = btn.closest('.card-photo').querySelector('.card-photo-label').textContent;
    lightbox.classList.toggle('single', photos.length < 2);
  };
  document.querySelectorAll('.card-photo-open').forEach(btn => {
    btn.addEventListener('click', () => {
      photos = [...btn.closest('[data-photos]').querySelectorAll('.card-photo-open')];
      showPhoto(photos.indexOf(btn));
      lightbox.showModal();
    });
  });
  lightbox.querySelectorAll('[data-lb-step]').forEach(b =>
    b.addEventListener('click', () => showPhoto(index + Number(b.dataset.lbStep))));
  lightbox.querySelector('[data-lb-close]').addEventListener('click', () => lightbox.close());
  // a click on the dark backdrop (outside the photo) closes it too
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showPhoto(index - 1);
    if (e.key === 'ArrowRight') showPhoto(index + 1);
  });
}
