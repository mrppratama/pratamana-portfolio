/* ════════════════════════════════════════
   PRATAMANA PORTFOLIO — script.js v4
   ════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────
  // 1. THEME TOGGLE
  // ─────────────────────────────────────
  const html   = document.documentElement;
  const tBtn   = document.getElementById('themeToggle');
  const tIcon  = document.getElementById('themeIcon');

  const saved  = localStorage.getItem('pm-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  applyThemeIcon(saved);

  tBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pm-theme', next);
    applyThemeIcon(next);
  });

  function applyThemeIcon(t) {
    tIcon.className  = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    tBtn.title       = t === 'dark' ? 'Mode Terang' : 'Mode Gelap';
  }

  // ─────────────────────────────────────
  // 2. ROLE SWITCHER — 1 at a time
  //    slide-up in → pause → slide-up out → next
  // ─────────────────────────────────────
  const roleItems = document.querySelectorAll('.role-item');
  let roleIdx     = 0;

  function showRole(i) {
    // mark all as hidden
    roleItems.forEach(el => el.classList.remove('active', 'exit'));
    roleItems[i].classList.add('active');
  }

  function nextRole() {
    // exit current
    roleItems[roleIdx].classList.add('exit');
    roleItems[roleIdx].classList.remove('active');

    // switch after exit animation (400ms)
    setTimeout(() => {
      roleIdx = (roleIdx + 1) % roleItems.length;
      showRole(roleIdx);
    }, 420);
  }

  if (roleItems.length > 0) {
    showRole(0);
    setInterval(nextRole, 2600); // show each role for 2.6s
  }

  // ─────────────────────────────────────
  // 3. PARTICLE CANVAS
  // ─────────────────────────────────────
  const canvas = document.getElementById('particleCanvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const DOT_COUNT = 85;
  const dots = Array.from({ length: DOT_COUNT }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    r:  Math.random() * 1.6 + 0.3,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
    o:  Math.random() * 0.4 + 0.07,
  }));

  function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const dark = html.getAttribute('data-theme') === 'dark';
    const rgb  = dark ? '96,165,250' : '37,99,235';

    dots.forEach(d => {
      d.x += d.vx;  d.y += d.vy;
      if (d.x < 0) d.x = canvas.width;
      if (d.x > canvas.width)  d.x = 0;
      if (d.y < 0) d.y = canvas.height;
      if (d.y > canvas.height) d.y = 0;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${d.o})`;
      ctx.fill();
    });

    // connections
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 115) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${rgb},${0.065 * (1 - d / 115)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawDots);
  }
  drawDots();

  // ─────────────────────────────────────
  // 4. CURSOR GLOW
  // ─────────────────────────────────────
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  // ─────────────────────────────────────
  // 5. STICKY HEADER + ACTIVE NAV
  // ─────────────────────────────────────
  const header   = document.getElementById('mainHeader');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);

    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 95) cur = s.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });

  // ─────────────────────────────────────
  // 6. HAMBURGER MENU
  // ─────────────────────────────────────
  const ham  = document.getElementById('hamburgerBtn');
  const nav  = document.getElementById('navLinks');

  ham.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navItems.forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => {
    if (!header.contains(e.target) && nav.classList.contains('open')) closeMenu();
  });

  function closeMenu() {
    nav.classList.remove('open');
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }

  // ─────────────────────────────────────
  // 7. SMOOTH SCROLL
  // ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
      }
    });
  });

  // ─────────────────────────────────────
  // 8. PORTFOLIO FILTER
  // ─────────────────────────────────────
  const filterBtns = document.querySelectorAll('.fb');
  const cards      = document.querySelectorAll('.pc');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const f = this.getAttribute('data-filter');
      cards.forEach(c => {
        const match = f === 'all' || c.getAttribute('data-category') === f;
        if (match) {
          c.classList.remove('hidden');
          c.style.animation = 'cardIn .4s ease forwards';
        } else {
          c.classList.add('hidden');
        }
      });
    });
  });

  // ─────────────────────────────────────
  // 9. SCROLL REVEAL (data-aos)
  // ─────────────────────────────────────
  const aosEls = document.querySelectorAll('[data-aos]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  aosEls.forEach(el => io.observe(el));

  // ─────────────────────────────────────
  // 10. HERO STAT COUNTER
  // ─────────────────────────────────────
  const statNums = document.querySelectorAll('.hs-num[data-target]');
  let counted = false;
  const statsWrap = document.querySelector('.hero-stats');

  if (statsWrap) {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        statNums.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          let n = 0;
          const step = target / 38;
          const iv = setInterval(() => {
            n += step;
            if (n >= target) { el.textContent = target + '+'; clearInterval(iv); }
            else               el.textContent = Math.floor(n)  + '+';
          }, 38);
        });
      }
    }).observe(statsWrap);
  }

  // ─────────────────────────────────────
  // 11. CONTACT FORM
  // ─────────────────────────────────────
  const form    = document.getElementById('contactForm');
  const formOK  = document.getElementById('ctOk');
  const cSubmit = document.getElementById('cSubmit');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name  = document.getElementById('cName').value.trim();
      const email = document.getElementById('cMail').value.trim();
      const msg   = document.getElementById('cMsg').value.trim();

      if (!name || !email || !msg) { showFormErr('Mohon lengkapi semua field.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showFormErr('Email tidak valid.'); return; }

      cSubmit.classList.add('loading');
      cSubmit.disabled = true;

      setTimeout(() => {
        cSubmit.classList.remove('loading');
        cSubmit.disabled = false;
        formOK.classList.add('show');
        form.reset();
        setTimeout(() => formOK.classList.remove('show'), 5000);
      }, 1800);
    });
  }

  function showFormErr(msg) {
    const old = form.querySelector('.form-err');
    if (old) old.remove();
    const el = document.createElement('div');
    el.className = 'form-err';
    el.style.cssText =
      'display:flex;align-items:center;gap:8px;margin-top:12px;padding:11px 15px;' +
      'background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.22);' +
      'border-radius:10px;color:#f87171;font-size:.84rem;font-weight:500;';
    el.innerHTML = `<i class="fas fa-exclamation-circle"></i>${msg}`;
    cSubmit.parentNode.insertBefore(el, cSubmit);
    setTimeout(() => el.remove(), 4000);
  }

  // ─────────────────────────────────────
  // 12. BACK TO TOP
  // ─────────────────────────────────────
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});

// keyframe for portfolio filter
const s = document.createElement('style');
s.textContent = '@keyframes cardIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}';
document.head.appendChild(s);