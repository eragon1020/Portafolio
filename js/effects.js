/* ==========================================================
   GAMER EFFECTS — Full Suite
   Capa visual independiente. No modifica nada del diseño original.
   Se auto-desactiva en dispositivos sin cursor y con reduced-motion.
   ========================================================== */
(function () {
  'use strict';

  /* ---- Bail-out conditions ---- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (prefersReduced) return;

  /* ---- Mouse coords shared ---- */
  let mouseX = -100, mouseY = -100;


  /* ============================================================
     1. CURSOR TRAIL — partículas ámbar que siguen al ratón
     ============================================================ */
  if (hasFinePointer) {
    const TRAIL_POOL_SIZE = 20;
    const TRAIL_LIFETIME = 600;
    const trailPool = [];
    let trailIndex = 0;

    for (let i = 0; i < TRAIL_POOL_SIZE; i++) {
      const el = document.createElement('div');
      el.className = 'cursor-trail-particle';
      el.style.cssText = 'position:fixed;pointer-events:none;z-index:99999;opacity:0;will-change:transform,opacity;';
      document.body.appendChild(el);
      trailPool.push({ el, timer: null });
    }

    let lastTrailTime = 0;
    const TRAIL_THROTTLE = 30;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const now = performance.now();
      if (now - lastTrailTime < TRAIL_THROTTLE) return;
      lastTrailTime = now;

      const particle = trailPool[trailIndex];
      trailIndex = (trailIndex + 1) % TRAIL_POOL_SIZE;
      if (particle.timer) clearTimeout(particle.timer);

      const size = 4 + Math.random() * 4;
      const el = particle.el;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = e.clientX - size / 2 + 'px';
      el.style.top = e.clientY - size / 2 + 'px';
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';

      var colors = ['#E8A230', '#E8A230', '#E8A230', '#5CE0D8', '#ffffff'];
      el.style.background = colors[Math.floor(Math.random() * colors.length)];

      requestAnimationFrame(function () {
        el.style.transition = 'opacity ' + TRAIL_LIFETIME + 'ms ease-out, transform ' + TRAIL_LIFETIME + 'ms ease-out';
        el.style.opacity = '0';
        el.style.transform = 'scale(0.1) translateY(-20px)';
      });

      particle.timer = setTimeout(function () {
        el.style.transition = 'none';
      }, TRAIL_LIFETIME);
    }, { passive: true });
  }


  /* ============================================================
     2. CLICK BURST — explosión de chispas al hacer click
     ============================================================ */
  var BURST_COUNT = 14;
  var BURST_DURATION = 700;

  document.addEventListener('click', function (e) {
    var cx = e.clientX;
    var cy = e.clientY;

    var flash = document.createElement('div');
    flash.className = 'click-burst-flash';
    flash.style.cssText =
      'position:fixed;pointer-events:none;z-index:99998;' +
      'left:' + cx + 'px;top:' + cy + 'px;';
    document.body.appendChild(flash);
    flash.offsetWidth;
    flash.classList.add('click-burst-flash--active');
    setTimeout(function () { flash.remove(); }, 500);

    for (var i = 0; i < BURST_COUNT; i++) {
      var p = document.createElement('div');
      p.className = 'click-burst-particle';

      var angle = (Math.PI * 2 / BURST_COUNT) * i + (Math.random() - 0.5) * 0.5;
      var distance = 40 + Math.random() * 70;
      var dx = Math.cos(angle) * distance;
      var dy = Math.sin(angle) * distance - 20;
      var size = 3 + Math.random() * 4;

      var sparkColors = ['#E8A230', '#E8A230', '#5CE0D8', '#ffffff', '#ff6b35'];
      var color = sparkColors[Math.floor(Math.random() * sparkColors.length)];

      p.style.cssText =
        'position:fixed;pointer-events:none;z-index:99998;' +
        'left:' + cx + 'px;top:' + cy + 'px;' +
        'width:' + size + 'px;height:' + size + 'px;' +
        'background:' + color + ';' +
        'border-radius:50%;' +
        'box-shadow:0 0 6px ' + color + ', 0 0 12px ' + color + ';' +
        '--dx:' + dx + 'px;--dy:' + dy + 'px;' +
        'will-change:transform,opacity;';

      document.body.appendChild(p);
      p.offsetWidth;
      p.classList.add('click-burst-particle--active');
      setTimeout((function (el) { return function () { el.remove(); }; })(p), BURST_DURATION);
    }
  });


  /* ============================================================
     3. CUSTOM CURSOR — crosshair gamer (solo desktop)
     ============================================================ */
  if (hasFinePointer) {
    // Ocultar cursor nativo
    var cursorStyle = document.createElement('style');
    cursorStyle.textContent =
      '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(cursorStyle);

    // Dot central
    var cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    // Ring exterior
    var cursorRing = document.createElement('div');
    cursorRing.className = 'custom-cursor-ring';
    document.body.appendChild(cursorRing);

    // Movimiento suave del ring con lerp
    var ringX = -100, ringY = -100;

    function updateCursorRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
      requestAnimationFrame(updateCursorRing);
    }
    requestAnimationFrame(updateCursorRing);

    // Hover grow en links y botones
    var interactiveEls = 'a, button, [data-magnetic], .filter-btn, .carousel-arrow, .tag, .lang-toggle__btn';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(interactiveEls)) {
        cursorRing.classList.add('custom-cursor-ring--hover');
        cursorDot.classList.add('custom-cursor-dot--hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(interactiveEls)) {
        cursorRing.classList.remove('custom-cursor-ring--hover');
        cursorDot.classList.remove('custom-cursor-dot--hover');
      }
    });

    // Click press
    document.addEventListener('mousedown', function () {
      cursorRing.classList.add('custom-cursor-ring--click');
    });
    document.addEventListener('mouseup', function () {
      cursorRing.classList.remove('custom-cursor-ring--click');
    });
  }


  /* ============================================================
     4. GLITCH TEXT — efecto glitch en el nombre del hero
     ============================================================ */
  var heroName = document.querySelector('.hero__name');
  if (heroName) {
    heroName.classList.add('glitch-target');
    heroName.setAttribute('data-text', heroName.textContent);

    // Glitch al hover
    heroName.addEventListener('mouseenter', function () {
      heroName.classList.add('glitch-active');
    });
    heroName.addEventListener('mouseleave', function () {
      heroName.classList.remove('glitch-active');
    });

    // Auto-glitch cada 5s
    setInterval(function () {
      heroName.classList.add('glitch-active');
      setTimeout(function () {
        heroName.classList.remove('glitch-active');
      }, 300);
    }, 5000);
  }


  /* ============================================================
     5. RGB GLOW — borde neón animado en cards al hover
     ============================================================ */
  var glowCards = document.querySelectorAll('.project-card, .contact-card');
  glowCards.forEach(function (card) {
    card.classList.add('rgb-glow-card');
  });


  /* ============================================================
     6. SCROLL PROGRESS BAR — barra de progreso ámbar→cyan
     ============================================================ */
  var progressBar = document.getElementById('scrollProgress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);
  }

  function updateScrollProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();


  /* ============================================================
     7. TEXT SCRAMBLE — títulos se decodifican al aparecer
     ============================================================ */
  var scrambleChars = '!<>-_\\/[]{}—=+*^?#_アイウエオカキクケコサシスセソ';

  function scrambleText(el) {
    var original = el.getAttribute('data-original') || el.textContent;
    el.setAttribute('data-original', original);
    var length = original.length;
    var iterations = 0;
    var maxIterations = length * 2;

    var interval = setInterval(function () {
      var result = '';
      for (var i = 0; i < length; i++) {
        if (original[i] === ' ') {
          result += ' ';
        } else if (i < iterations / 2) {
          result += original[i];
        } else {
          result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      }
      el.textContent = result;
      iterations++;
      if (iterations > maxIterations) {
        clearInterval(interval);
        el.textContent = original;
      }
    }, 30);
  }

  var scrambleTargets = document.querySelectorAll('.panel__title');
  if ('IntersectionObserver' in window) {
    var scrambleObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          scrambleText(entry.target);
          scrambleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    scrambleTargets.forEach(function (el) {
      scrambleObserver.observe(el);
    });
  }


  /* ============================================================
     8. SCANLINES — overlay CRT sutil sobre el hero
     ============================================================ */
  var hero = document.querySelector('.hero');
  if (hero) {
    var scanlines = document.createElement('div');
    scanlines.className = 'scanlines-overlay';
    scanlines.setAttribute('aria-hidden', 'true');
    hero.appendChild(scanlines);
  }

})();
