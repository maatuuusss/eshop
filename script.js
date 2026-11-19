// Tieň hlavičky pri scrolle
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Postupné zobrazovanie prvkov pri scrolle
const targets = document.querySelectorAll(
  '.benefit, .cat, .card, section > h2, .filters, .toolbar, .form-box, .summary, .table-wrap, .gallery, .detail > div:last-child, .sidebar'
);
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
targets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 4) * 80 + 'ms';
  io.observe(el);
});
