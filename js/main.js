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

// ============ CASSETTE PLAYER ============
// Drop your own audio files into /music and list them here to make the
// player actually play something. Until then it's a fully working UI
// (play/pause/next/prev/mute + spinning reels) with silent placeholders.
const playlist = [
  { title: 'The Best of Both Worlds 🎸', src: 'music/track1.mp3' },
  { title: 'Hung Up 💫', src: 'music/track2.mp3' },
  { title: 'Mamma Mia 🕺', src: 'music/track3.mp3' },
  { title: 'Look What You Made Me Do 🐍', src: 'music/track4.mp3' },
  { title: 'Amor Salvaje 🤠', src: 'music/track5.mp3' },
  { title: 'Manchild 🎀', src: 'music/track6.mp3' },
];

function trackLabelText(i) {
  const [track, of] = currentLang() === 'es' ? ['Tema', 'de'] : ['Track', 'of'];
  return `${track} ${i + 1} ${of} ${playlist.length} — ${playlist[i].title}`;
}

const audio = document.getElementById('audio-player');
const trackLabel = document.getElementById('track-label');
const reels = document.querySelectorAll('.reel');
const playBtn = document.querySelector('[data-action="play"]');
const muteBtn = document.querySelector('[data-action="mute"]');
let trackIndex = 0;
let isPlaying = false;

function loadTrack(i) {
  trackIndex = (i + playlist.length) % playlist.length;
  const track = playlist[trackIndex];
  audio.src = track.src;
  trackLabel.textContent = trackLabelText(trackIndex);
}
document.addEventListener('langchange', () => {
  if (trackLabel) trackLabel.textContent = trackLabelText(trackIndex);
});

function setSpinning(spin) {
  reels.forEach(r => r.classList.toggle('spin', spin));
}

function togglePlay() {
  if (!audio.src) loadTrack(trackIndex);
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play().catch(() => {
      // No audio file present yet — just simulate the visual state.
    });
  }
}

audio?.addEventListener('play', () => {
  isPlaying = true;
  setSpinning(true);
  playBtn.textContent = '❚❚';
});
audio?.addEventListener('pause', () => {
  isPlaying = false;
  setSpinning(false);
  playBtn.textContent = '▶';
});
audio?.addEventListener('ended', () => loadTrack(trackIndex + 1));

document.querySelectorAll('.ctrl-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    if (action === 'play') {
      // fallback visual toggle even without a real audio source
      if (!audio.src || audio.error) {
        isPlaying = !isPlaying;
        setSpinning(isPlaying);
        playBtn.textContent = isPlaying ? '❚❚' : '▶';
        if (isPlaying) loadTrack(trackIndex);
      } else {
        togglePlay();
      }
    }
    if (action === 'stop') {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
      setSpinning(false);
      playBtn.textContent = '▶';
    }
    if (action === 'next') loadTrack(trackIndex + 1);
    if (action === 'prev') loadTrack(trackIndex - 1);
    if (action === 'mute') {
      audio.muted = !audio.muted;
      muteBtn.classList.toggle('active', audio.muted);
      muteBtn.textContent = audio.muted ? '🔇' : '🔊';
    }
  });
});

loadTrack(0);

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
