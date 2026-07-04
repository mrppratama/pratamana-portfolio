/* ============================================
   PRATAMANA PORTFOLIO - JAVASCRIPT
   Features: Dark/Light Mode, Animations,
   Particle BG, Typing Effect, Portfolio Filter
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ========================================
  // 1. THEME TOGGLE (Dark / Light Mode)
  // ========================================
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('pratamana-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pratamana-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.title = theme === 'dark' ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap';
  }

  // ========================================
  // 2. TYPING EFFECT
  // ========================================
  const typingEl = document.getElementById('typingText');
  const fullName = 'Muhammad Ramadhan Putra Pratama';
  let charIndex = 0;
  let isTyping = true;

  function typeWriter() {
    if (isTyping) {
      if (charIndex < fullName.length) {
        typingEl.textContent += fullName[charIndex];
        charIndex++;
        setTimeout(typeWriter, 55);
      } else {
        isTyping = false;
        setTimeout(typeWriter, 3500);
      }
    } else {
      if (charIndex > 0) {
        typingEl.textContent = fullName.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 30);
      } else {
        isTyping = true;
        setTimeout(typeWriter, 600);
      }
    }
  }

  setTimeout(typeWriter, 800);

  // ========================================
  // 3. PARTICLE CANVAS BACKGROUND
  // ========================================
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    };
  }

  for (let i = 0; i < 100; i++) particles.push(createParticle());

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = html.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? '96, 165, 250' : '37, 99, 235';

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${particleColor}, ${0.08 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ========================================
  // 4. CURSOR GLOW
  // ========================================
  const cursorGlow = document.getElementById('cursorGlow');

  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  // ========================================
  // 5. STICKY HEADER + ACTIVE NAV
  // ========================================
  const header = document.getElementById('mainHeader');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Sticky shadow
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active nav highlight
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (href === '#' + current) {
        item.classList.add('active');
      }
    });
  });

  // ========================================
  // 6. HAMBURGER MOBILE MENU
  // ========================================
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ========================================
  // 7. SMOOTH SCROLL
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ========================================
  // 8. PORTFOLIO FILTER
  // ========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const match = filter === 'all' || category === filter;

        if (match) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ========================================
  // 9. SCROLL ANIMATION (AOS-like)
  // ========================================
  const animatedEls = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animatedEls.forEach(el => observer.observe(el));

  // ========================================
  // 10. CONTACT FORM
  // ========================================
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitContactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmailInput').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        showFormError('Mohon lengkapi semua field yang diperlukan.');
        return;
      }

      if (!isValidEmail(email)) {
        showFormError('Mohon masukkan alamat email yang valid.');
        return;
      }

      // Simulate sending
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        formSuccess.classList.add('show');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }, 1800);
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormError(msg) {
    const existing = contactForm.querySelector('.form-error');
    if (existing) existing.remove();
    const err = document.createElement('div');
    err.className = 'form-error';
    err.style.cssText = `
      display:flex;align-items:center;gap:8px;padding:12px 16px;
      background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);
      border-radius:10px;color:#f87171;font-size:0.88rem;font-weight:500;margin-top:12px;
    `;
    err.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
    submitBtn.parentNode.insertBefore(err, submitBtn);
    setTimeout(() => { if (err.parentNode) err.remove(); }, 4000);
  }

  // ========================================
  // 11. BACK TO TOP BUTTON
  // ========================================
  const backToTop = document.getElementById('backToTop');

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========================================
  // 12. COUNTER ANIMATION FOR HERO STATS
  // ========================================
  function animateCounter(el, target, suffix = '+') {
    let current = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target + suffix;
        clearInterval(interval);
      } else {
        el.textContent = Math.floor(current) + suffix;
      }
    }, 40);
  }

  const statsSection = document.querySelector('.hero-stats');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !statsAnimated) {
      statsAnimated = true;
      const statNumbers = document.querySelectorAll('.stat-number');
      const targets = [8, 5, 3];
      statNumbers.forEach((el, i) => animateCounter(el, targets[i]));
    }
  });

  if (statsSection) statsObserver.observe(statsSection);

});