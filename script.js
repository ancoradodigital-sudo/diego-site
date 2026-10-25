const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.desktop-nav');
const progressBar = document.querySelector('.scroll-progress');
const floatingContact = document.querySelector('.floating-contact');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const parallaxItems = [
  { element: document.querySelector('.hero-media'), speed: 0.08, limit: 45 },
  { element: document.querySelector('.site-proof-main img'), speed: 0.045, limit: 24 },
  { element: document.querySelector('.site-proof-detail img'), speed: -0.035, limit: 18 },
  { element: document.querySelector('.quality-photo img'), speed: 0.04, limit: 20 },
  { element: document.querySelector('.en-title'), speed: -0.025, limit: 18 }
].filter((item) => item.element);
let scrollFrame;

const updateParallax = () => {
  scrollFrame = null;
  if (reducedMotion.matches) {
    parallaxItems.forEach(({ element }) => element.style.setProperty('--parallax-y', '0px'));
    return;
  }
  const viewportCenter = window.innerHeight / 2;
  parallaxItems.forEach(({ element, speed, limit }) => {
    const bounds = element.getBoundingClientRect();
    if (bounds.bottom < -100 || bounds.top > window.innerHeight + 100) return;
    const distance = bounds.top + bounds.height / 2 - viewportCenter;
    const offset = Math.max(-limit, Math.min(limit, -distance * speed));
    element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
  });
};

const requestScrollEffects = () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateParallax);
};

const updateScrollUI = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  floatingContact.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.setProperty('--scroll', `${progress}%`);
};

window.addEventListener('scroll', updateScrollUI, { passive: true });
window.addEventListener('scroll', requestScrollEffects, { passive: true });
window.addEventListener('resize', requestScrollEffects, { passive: true });
updateScrollUI();
updateParallax();

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.target);
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(counter);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count').forEach((counter) => counterObserver.observe(counter));
