/* ============================================
   BSDK AI — script.js
   ============================================ */

// ── Lucide Icons Initialize ─────────────────
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  // ── Navbar Scroll Effect ──────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── Mobile Menu Toggle ────────────────────
  const hamburger    = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const menuIconEl   = document.getElementById('menuIcon');

  let menuOpen = false;

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileDrawer.classList.toggle('open', menuOpen);

    // Swap icon between menu and X
    menuIconEl.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
    lucide.createIcons();
  });

  // Close drawer when a mobile link is clicked
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileDrawer.classList.remove('open');
      menuIconEl.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });

  // ── Scroll Reveal Animation ───────────────
  const animEls = document.querySelectorAll('.anim-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger sibling cards
        const siblings = entry.target.parentElement.querySelectorAll('.anim-scroll');
        let delay = 0;
        siblings.forEach((el, idx) => {
          if (el === entry.target) delay = idx * 60;
        });
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animEls.forEach(el => observer.observe(el));

  // ── Active nav link highlight on scroll ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
        });
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.style.color = '#7C83FF';
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));
});
