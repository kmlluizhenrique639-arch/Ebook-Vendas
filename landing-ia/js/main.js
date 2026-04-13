// ── Smooth nav highlight on scroll ──
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

// ── Scroll-reveal animation ──
const revealElements = document.querySelectorAll(
  '.prob-card, .learn-card, .chap-card, .t-card, .benefit-item'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── CTA form submit (placeholder) ──
const ctaBtn = document.querySelector('.btn-white');
const ctaInput = document.querySelector('.cta-input');

if (ctaBtn && ctaInput) {
  ctaBtn.addEventListener('click', () => {
    const email = ctaInput.value.trim();
    if (!email || !email.includes('@')) {
      ctaInput.style.borderColor = 'rgba(239,68,68,0.7)';
      ctaInput.focus();
      return;
    }
    // TODO: integrate with your payment / email provider
    alert(`Redirecionando para o pagamento com o e-mail: ${email}`);
  });
}
