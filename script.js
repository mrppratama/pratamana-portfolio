/* ============================================
   PRATAMANA PORTFOLIO — SCRIPT v3
   Role Switcher | Theme | Particles | Filter
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ========================================
  // 1. THEME TOGGLE
  // ========================================
  const html        = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon   = document.getElementById('themeIcon');

  const saved = localStorage.getItem('pratamana-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateIcon(saved);

  themeToggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pratamana-theme', next);
    updateIcon(next);
  });

  function updateIcon(t) {
    themeIcon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.title   = t === 'dark' ? 'Mode Terang' : 'Mode Gelap';
  }

  // ========================================
  // 2. ROLE WORD SWITCHER (JS-enhanced)
  //    CSS handles the track scroll;
  //    JS restarts animation cleanly
  // ========================================
  const roleTrack = document.getElementById('roleTrack');
  const roleWords = roleTrack ? roleTrack.querySelectorAll('.role-word') : [];
  let   roleIdx   = 0;

  if (roleWords.length > 0) {
    // Show only the active word via opacity — CSS animation handles it
    // We also add a slight letter-by-letter reveal for extra polish
    setInterval(() => {
      roleIdx = (roleIdx + 1) % roleWords.length;
    }, 2000);
  }

  // ========================================
  // 3. PARTICLE CANVAS
  // ========================================
  const canvas = document.getElementById('particleCanvas');
  const ctx    = canvas.getContext('2d');

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const P = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + .4,
    vx: (Math.random() - .5) * .35,
    vy: (Math.random() - .5) * .35,
    o: Math.random() * .45 + .08,
  }));

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const dark = html.getAttribute('data-theme') === 'dark';
    const rgb  = dark ? '96,165,250' : '37,99,235';

    P.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width)  p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${p.o})`;
      ctx.fill();
    });

    for (let i = 0; i < P.length; i++) {
      for (let j = i + 1; j < P.length; j++) {
        const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(P[i].x, P[i].y);
          ctx.lineTo(P[j].x, P[j].y);
          ctx.strokeStyle = `rgba(${rgb},${.07 * (1 - d / 120)})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  // ========================================
  // 4. CURSOR GLOW
  // ========================================
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  // ========================================
  // 5. STICKY HEADER + ACTIVE NAV
  // ========================================
  const header   = document.getElementById('mainHeader');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // ========================================
  // 6. HAMBURGER
  // ========================================
  const ham      = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  ham.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navItems.forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (!header.contains(e.target) && navLinks.classList.contains('open')) closeMenu();
  });

  function closeMenu() {
    navLinks.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }

  // ========================================
  // 7. SMOOTH SCROLL
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // ========================================
  // 8. PORTFOLIO FILTER
  // ========================================
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const portCards   = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const f = this.getAttribute('data-filter');
      portCards.forEach(card => {
        const match = f === 'all' || card.getAttribute('data-category') === f;
        card.classList.toggle('hidden', !match);
        if (match) card.style.animation = 'fadeInCard .4s ease forwards';
      });
    });
  });

  // ========================================
  // 9. SCROLL ANIMATION
  // ========================================
  const aosEls = document.querySelectorAll('[data-aos]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('aos-animate');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  aosEls.forEach(el => io.observe(el));

  // ========================================
  // 10. CONTACT FORM
  // ========================================
  const form       = document.getElementById('contactForm');
  const formOK     = document.getElementById('formSuccess');
  const submitBtn  = document.getElementById('submitContactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmailInput').value.trim();
      const msg   = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !msg) { showErr('Mohon lengkapi semua field.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showErr('Email tidak valid.'); return; }

      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        formOK.classList.add('show');
        form.reset();
        setTimeout(() => formOK.classList.remove('show'), 5000);
      }, 1800);
    });
  }

  function showErr(msg) {
    const old = form.querySelector('.form-error');
    if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'form-error';
    el.style.cssText = 'display:flex;align-items:center;gap:8px;padding:11px 15px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.24);border-radius:9px;color:#f87171;font-size:.86rem;font-weight:500;margin-top:11px;';
    el.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
    submitBtn.parentNode.insertBefore(el, submitBtn);
    setTimeout(() => el.remove(), 4000);
  }

  // ========================================
  // 11. BACK TO TOP
  // ========================================
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========================================
  // 12. HERO STAT COUNTER
  // ========================================
  const statsWrap = document.querySelector('.hero-stats');
  let counted = false;

  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.getAttribute('data-target')) || 0;
        let n = 0, step = target / 40;
        const iv = setInterval(() => {
          n += step;
          if (n >= target) { el.textContent = target + '+'; clearInterval(iv); }
          else el.textContent = Math.floor(n) + '+';
        }, 40);
      });
    }
  }).observe(statsWrap);

});

// portfolio fade-in keyframe (used by filter)
const style = document.createElement('style');
style.textContent = '@keyframes fadeInCard { from{opacity:0;transform:scale(.96)} to{opacity:1;transform:scale(1)} }';
document.head.appendChild(style);