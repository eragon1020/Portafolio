const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = typeof gsap !== 'undefined';

if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ==========================================================
// Año y fecha de actualización automáticos
// ==========================================================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function updateLastUpdated(lang) {
  const updatedEl = document.getElementById('lastUpdated');
  if (!updatedEl) return;
  const locale = lang === 'en' ? 'en-US' : 'es-CO';
  updatedEl.textContent = new Date().toLocaleDateString(locale, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

// ==========================================================
// Efecto de máquina de escribir en el hero (reinicia al cambiar idioma)
// ==========================================================
const typewriterEl = document.getElementById('typewriter');
let typewriterToken = 0;

function runTypewriter(lang) {
  if (!typewriterEl) return;
  const myToken = ++typewriterToken;
  const roles = (typeof rolesByLang !== 'undefined' && rolesByLang[lang]) || [''];

  if (prefersReducedMotion) {
    typewriterEl.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1600;

  function tick() {
    if (myToken !== typewriterToken) return; // idioma cambió: detener este ciclo
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      typewriterEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      typewriterEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }
  charIndex = 0;
  deleting = false;
  tick();
}

// ==========================================================
// Ticker de estado (marquee infinito, pausa con reduced-motion)
// ==========================================================
function buildTicker(lang) {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const messages = (typeof tickerByLang !== 'undefined' && tickerByLang[lang]) || [];
  const line = messages.map((m, i) => `<span class="ticker__item mono">${m}</span>`).join('<span class="ticker__dot">·</span>');
  // duplicamos el contenido para loop continuo sin salto visible
  track.innerHTML = line + '<span class="ticker__dot">·</span>' + line;
}

// ==========================================================
// Reaccionar a cambios de idioma (evento emitido por i18n.js)
// ==========================================================
document.addEventListener('langchange', (e) => {
  const lang = e.detail.lang;
  runTypewriter(lang);
  buildTicker(lang);
  updateLastUpdated(lang);
});

// ==========================================================
// Red de nodos animada en el hero (canvas, tema IoT)
// ==========================================================
function initNetworkCanvas() {
  const canvas = document.getElementById('networkCanvas');
  const hero = document.querySelector('.hero');
  if (!canvas || !hero) return;

  const ctx = canvas.getContext('2d');
  let width, height, nodes;
  const NODE_COUNT_BASE = 60; // por cada 1000px de ancho
  const LINK_DIST = 130;
  const amberRGB = '232,163,61';
  const tealRGB = '95,168,160';

  function resize() {
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
    const count = Math.min(70, Math.round((width / 1000) * NODE_COUNT_BASE));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.6,
      hue: Math.random() > 0.85 ? tealRGB : amberRGB
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.18;
          ctx.strokeStyle = `rgba(${amberRGB},${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.hue},0.55)`;
      ctx.fill();
    });

    if (!prefersReducedMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  if (prefersReducedMotion) {
    step(); // un solo frame estático
  } else {
    requestAnimationFrame(step);
  }
}

// ==========================================================
// Animaciones de entrada + scroll con GSAP
// ==========================================================
function initGSAPAnimations() {
  if (!hasGSAP) {
    // Fallback sin GSAP: revelar todo con IntersectionObserver simple
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(el => io.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('is-visible'));
    }
    return;
  }

  const ease = 'power3.out';
  const heroTargets = ['.eyebrow', '.hero__name', '.hero__role', '.hero__pitch', '.hero__actions', '.hero__socials'];

  // --- Secuencia de entrada del hero ---
  gsap.set(heroTargets, { opacity: 0, y: 14 });
  gsap.timeline({ defaults: { ease } })
    .to('.eyebrow', { opacity: 1, y: 0, duration: 0.6 }, 0)
    .to('.hero__name', { opacity: 1, y: 0, duration: 0.7 }, 0.1)
    .to('.hero__role', { opacity: 1, y: 0, duration: 0.7 }, 0.2)
    .to('.hero__pitch', { opacity: 1, y: 0, duration: 0.7 }, 0.3)
    .to('.hero__actions', { opacity: 1, y: 0, duration: 0.7 }, 0.4)
    .to('.hero__socials', { opacity: 1, y: 0, duration: 0.7 }, 0.5);

  // --- Revelado de cada panel al hacer scroll, con stagger de hijos ---
  document.querySelectorAll('.reveal').forEach(panel => {
    const label = panel.querySelector('.panel__label');
    const children = panel.querySelectorAll('.reveal-child');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: panel,
        start: 'top 78%',
        toggleActions: 'play none none none'
      }
    });

    if (label) tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease });
    if (children.length) {
      tl.fromTo(children, { opacity: 0, y: 22 }, {
        opacity: 1, y: 0, duration: 0.55, ease, stagger: 0.06
      }, label ? '-=0.35' : 0);
    } else {
      // secciones sin reveal-child explícitos (ej. contacto): anima el contenedor completo
      tl.fromTo(panel.querySelector('.panel__grid') || panel.querySelector('.container'),
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease }, label ? '-=0.3' : 0);
    }

    panel.classList.add('is-visible'); // asegura estado final por si ScrollTrigger no corre (ej. print)
  });

  // --- Parallax sutil de la grilla del hero con el mouse ---
  const heroGrid = document.querySelector('.hero__grid');
  if (heroGrid && window.matchMedia('(pointer: fine)').matches) {
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(heroGrid, { x: x * 18, y: y * 18, duration: 0.8, ease: 'power2.out' });
    });
  }
}

// ==========================================================
// Botones magnéticos (data-magnetic)
// ==========================================================
function initMagneticButtons() {
  if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = 0.35;
      if (hasGSAP) {
        gsap.to(btn, { x: x * strength, y: y * strength, duration: 0.3, ease: 'power2.out' });
      } else {
        btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      }
    });
    btn.addEventListener('mouseleave', () => {
      if (hasGSAP) {
        gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
      } else {
        btn.style.transform = '';
      }
    });
  });
}

// ==========================================================
// Tarjetas con inclinación 3D sutil (data-tilt)
// ==========================================================
function initTiltCards() {
  if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = (-py * 6).toFixed(2);
      const rotateY = (px * 6).toFixed(2);
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ==========================================================
// Resaltar el link de navegación activo según la sección visible
// ==========================================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function setActiveLink() {
  let currentId = sections[0]?.id;
  const scrollPos = window.scrollY + 140;

  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) currentId = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });

// ==========================================================
// Filtro de proyectos (Todos / Backend-Web / Unity)
// ==========================================================
function initProjectFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card[data-category]');
  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ==========================================================
// Música de fondo generativa (Web Audio API, sin archivos externos)
// Pad ambiental suave estilo synth + secuencia arpegiada discreta.
// Se sintetiza en el navegador: cero dependencias de red, cero temas
// de derechos de autor, y coherente con la estética "terminal" del sitio.
// ==========================================================
function initGenerativeAudio() {
  const toggleBtn = document.getElementById('soundToggle');
  if (!toggleBtn) return;

  let audioCtx = null;
  let masterGain = null;
  let padOsc = [];
  let arpInterval = null;
  let isPlaying = false;

  const NOTE_FREQS = [220.00, 246.94, 261.63, 293.66, 329.63, 392.00]; // A minor pentatonic-ish

  function ensureContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = 0;
      masterGain.connect(audioCtx.destination);
    }
    return audioCtx;
  }

  function startAudio() {
    const ctx = ensureContext();
    if (ctx.state === 'suspended') ctx.resume();

    // Pad: dos osciladores desafinados suavemente para un tono cálido
    const padGain = ctx.createGain();
    padGain.gain.value = 0.05;
    padGain.connect(masterGain);

    [110, 110.6].forEach(freq => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(padGain);
      osc.start();
      padOsc.push(osc);
    });

    // Arpegio discreto tipo "blip" cada cierto tiempo
    let step = 0;
    arpInterval = setInterval(() => {
      const freq = NOTE_FREQS[step % NOTE_FREQS.length];
      step++;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(masterGain);
      const now = ctx.currentTime;
      gain.gain.linearRampToValueAtTime(0.045, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
      osc.start(now);
      osc.stop(now + 1);
    }, 1400);

    masterGain.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.6);
  }

  function stopAudio() {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    masterGain.gain.linearRampToValueAtTime(0, now + 0.4);
    clearInterval(arpInterval);
    setTimeout(() => {
      padOsc.forEach(o => { try { o.stop(); } catch (e) {} });
      padOsc = [];
    }, 450);
  }

  toggleBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    toggleBtn.setAttribute('aria-pressed', String(isPlaying));
    toggleBtn.classList.toggle('is-active', isPlaying);
    if (isPlaying) startAudio(); else stopAudio();
  });
}

// ==========================================================
// Menú móvil
// ==========================================================
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================
// Init
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
  setActiveLink();
  initNetworkCanvas();
  initGSAPAnimations();
  initMagneticButtons();
  initTiltCards();
  initProjectFilter();
  initGenerativeAudio();
  // el primer runTypewriter/buildTicker/updateLastUpdated llega vía el evento
  // 'langchange' disparado por i18n.js al aplicar el idioma inicial
});
