import * as pdfjsLib from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.3.289/pdf.min.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.3.289/pdf.worker.min.mjs';

const CV_SRC = 'assets/cv/MaViFlora_CV.pdf';

const modal = document.getElementById('cv-modal');
const canvas = document.getElementById('cv-pdf-canvas');
const ctx = canvas.getContext('2d');
const canvasWrap = document.querySelector('.cv-canvas-wrap');
const pageIndicator = document.getElementById('cv-page-indicator');
const prevBtn = document.querySelector('[data-cv-prev]');
const nextBtn = document.querySelector('[data-cv-next]');
const zoomInBtn = document.querySelector('[data-cv-zoom-in]');
const zoomOutBtn = document.querySelector('[data-cv-zoom-out]');

let pdfDoc = null;
let currentPage = 1;
let zoomLevel = 1;
let renderTask = null;

async function ensureLoaded() {
  if (pdfDoc) return;
  canvasWrap.classList.add('loading');
  pdfDoc = await pdfjsLib.getDocument({ url: CV_SRC }).promise;
  canvasWrap.classList.remove('loading');
}

async function renderPage(num) {
  const page = await pdfDoc.getPage(num);
  const unscaled = page.getViewport({ scale: 1 });
  const containerWidth = canvasWrap.clientWidth - 40;
  const baseScale = containerWidth / unscaled.width;
  const scale = Math.max(baseScale * zoomLevel, 0.2);
  const viewport = page.getViewport({ scale });
  const dpr = window.devicePixelRatio || 1;

  canvas.width = Math.floor(viewport.width * dpr);
  canvas.height = Math.floor(viewport.height * dpr);
  canvas.style.width = viewport.width + 'px';
  canvas.style.height = viewport.height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  if (renderTask) renderTask.cancel();
  renderTask = page.render({ canvasContext: ctx, viewport });
  await renderTask.promise.catch(() => {});

  pageIndicator.textContent = `${num} / ${pdfDoc.numPages}`;
  prevBtn.disabled = num <= 1;
  nextBtn.disabled = num >= pdfDoc.numPages;
}

async function openCv() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  try {
    await ensureLoaded();
    currentPage = 1;
    zoomLevel = 1;
    await renderPage(currentPage);
  } catch (err) {
    canvasWrap.classList.remove('loading');
    canvasWrap.classList.add('error');
  }
}

function closeCv() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-cv-trigger]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCv();
  });
});
document.querySelectorAll('[data-cv-close]').forEach(el => {
  el.addEventListener('click', closeCv);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeCv();
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) { currentPage--; renderPage(currentPage); }
});
nextBtn.addEventListener('click', () => {
  if (pdfDoc && currentPage < pdfDoc.numPages) { currentPage++; renderPage(currentPage); }
});
zoomInBtn.addEventListener('click', () => {
  zoomLevel = Math.min(zoomLevel + 0.2, 2.5);
  renderPage(currentPage);
});
zoomOutBtn.addEventListener('click', () => {
  zoomLevel = Math.max(zoomLevel - 0.2, 0.5);
  renderPage(currentPage);
});
