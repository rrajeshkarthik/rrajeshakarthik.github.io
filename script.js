/* ── SCRIPT.JS – Rajesh Karthik Portfolio ── */

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Smooth reveal on scroll
const revealEls = document.querySelectorAll(
  '.skill-card, .tl-card, .project-card, .blog-card, .coaching-card, .about-grid, .contact-grid, .section-heading, .certs-row, .booking-section'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn  = this.querySelector('button[type=submit]');
  const note = document.getElementById('formNote');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate send (replace with Formspree / EmailJS integration)
  setTimeout(() => {
    btn.textContent = 'Message Sent ✓';
    note.textContent = "Thank you! I'll get back to you within 24 hours.";
    this.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      note.textContent = '';
    }, 5000);
  }, 1200);
});

// Typing animation for hero title
(function () {
  const titleLines = ['Senior IT Program Manager', 'Agile Transformation Leader', 'Digital Strategist', 'GenAI Advocate'];
  const el = document.querySelector('.hero-title');
  if (!el) return;
  let li = 0, ci = 0, deleting = false;

  function tick() {
    const full = titleLines[li] + '\nAgile Transformation · Digital Strategy · GenAI';
    const display = titleLines[li].slice(0, ci);
    el.innerHTML = display + '<span style="color:var(--gold);opacity:0.8">|</span>\n<span style="opacity:0.4;font-size:0.85em">Agile Transformation · Digital Strategy · GenAI</span>';

    if (!deleting && ci < titleLines[li].length) {
      ci++;
      setTimeout(tick, 60);
    } else if (!deleting && ci === titleLines[li].length) {
      deleting = true;
      setTimeout(tick, 2400);
    } else if (deleting && ci > 0) {
      ci--;
      setTimeout(tick, 30);
    } else {
      deleting = false;
      li = (li + 1) % titleLines.length;
      setTimeout(tick, 300);
    }
  }
  setTimeout(tick, 800);
})();
