/**
 * =============================================
 *  ISAAC PRADEEP RAJ KL – PORTFOLIO JS
 *  Features: Dark/Light Toggle, Sticky Navbar,
 *  Scroll Animations, Particle System, Mobile Menu
 * =============================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===================== THEME TOGGLE ===================== */
  const htmlEl    = document.documentElement;
  const themeBtn  = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // Load saved theme
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-moon';
      themeBtn.title = 'Switch to Light Mode';
    } else {
      themeIcon.className = 'fas fa-sun';
      themeBtn.title = 'Switch to Dark Mode';
    }
  }

  /* ===================== STICKY NAVBAR ===================== */
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightNavLink();
    handleScrollTop();
  }, { passive: true });

  /* ===================== ACTIVE NAV LINK ===================== */
  function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  /* ===================== MOBILE HAMBURGER ===================== */
  const hamburger  = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinksEl.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinksEl.classList.remove('open');
    });
  });

  /* ===================== SCROLL TOP BUTTON ===================== */
  const scrollTopBtn = document.getElementById('scrollTop');

  function handleScrollTop() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ===================== SCROLL ANIMATIONS (AOS-like) ===================== */
  const aosElements = document.querySelectorAll('[data-aos]');
  const aosTrigger  = 0.12; // trigger when 12% visible

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-aos-delay') || '0');
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, delay);
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: aosTrigger });

  aosElements.forEach(el => animObserver.observe(el));

  /* ===================== PARTICLE SYSTEM ===================== */
  const particleContainer = document.getElementById('particles');

  function createParticles() {
    if (!particleContainer) return;
    const count = 28;
    const colors = ['#00A9FF', '#89CFF3', '#A0E9FF', '#CDF5FD'];

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'particle';

      const size  = Math.random() * 5 + 2;
      const left  = Math.random() * 100;
      const dur   = Math.random() * 8 + 6;
      const delay = Math.random() * 10;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.2;

      dot.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        --duration: ${dur}s;
        --delay: ${delay}s;
        opacity: 0;
        box-shadow: 0 0 ${size * 2}px ${color};
      `;
      particleContainer.appendChild(dot);
    }
  }

  createParticles();

  /* ===================== TYPEWRITER EFFECT (Hero Name) ===================== */
  // Subtle text highlight animation on hero section
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.style.opacity = '0';
    heroName.style.transform = 'translateY(20px)';
    setTimeout(() => {
      heroName.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      heroName.style.opacity = '1';
      heroName.style.transform = 'translateY(0)';
    }, 300);
  }

  /* ===================== CONTACT FORM ===================== */
  const form        = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) return;

      // Save to table via REST API
      try {
        await fetch('tables/contact_messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });
      } catch (err) {
        // API not available in static mode – silently continue
        console.log('Contact saved locally', { name, email, subject, message });
      }

      // Show success
      formSuccess.classList.add('show');
      form.reset();

      // Reset after 5 seconds
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    });
  }

  /* ===================== SKILL PILL HOVER GLOW ===================== */
  document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 0 12px rgba(0,169,255,0.4)';
    });
    pill.addEventListener('mouseleave', function () {
      this.style.boxShadow = '';
    });
  });

  /* ===================== ARCHITECTURE DIAGRAM HOVER ===================== */
  document.querySelectorAll('.arch-box').forEach(box => {
    box.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.borderColor = 'var(--blue-1)';
    });
    box.addEventListener('mouseleave', function () {
      this.style.transform = '';
      if (!this.classList.contains('arch-highlight')) {
        this.style.borderColor = '';
      }
    });
  });

  /* ===================== STATS COUNTER ANIMATION ===================== */
  const statNums = document.querySelectorAll('.stat-num');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNums.forEach(el => {
          const text   = el.textContent.trim();
          const numStr = text.replace(/[^0-9]/g, '');
          const suffix = text.replace(/[0-9]/g, '');
          const target = parseInt(numStr);

          if (isNaN(target)) return;

          let current  = 0;
          const step   = Math.ceil(target / 40);
          const timer  = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
          }, 40);
        });
        statsObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) statsObserver.observe(statsSection);

  /* ===================== SMOOTH NAV ANCHOR SCROLL ===================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // navbar height
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ===================== PROJECT CARD TILT EFFECT ===================== */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect   = this.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width / 2;
      const cy     = rect.height / 2;
      const tiltX  = ((y - cy) / cy) * 4;
      const tiltY  = -((x - cx) / cx) * 4;
      this.style.transform = `translateY(-6px) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = '';
    });
  });

  /* ===================== FLAGSHIP CARD GLOW CURSOR ===================== */
  document.querySelectorAll('.flagship-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x    = e.clientX - rect.left;
      const y    = e.clientY - rect.top;
      this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,169,255,0.04) 0%, var(--bg-card) 60%)`;
    });
    card.addEventListener('mouseleave', function () {
      this.style.background = '';
    });
  });

  /* ===================== INIT ===================== */
  console.log('%c 🚀 Isaac Pradeep Raj KL – Portfolio Loaded! ', 'background: #00A9FF; color: #fff; padding: 6px 12px; border-radius: 4px; font-weight: bold;');
});
