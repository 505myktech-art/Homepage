const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

document.addEventListener('dragstart', (event) => {
  if (event.target instanceof HTMLImageElement) event.preventDefault();
});

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 28);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const closeNavigation = () => {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '選單';
};

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('span').textContent = isOpen ? '關閉' : '選單';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !navigation.classList.contains('is-open')) return;
  closeNavigation();
  menuButton.focus();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('is-visible'));
}
