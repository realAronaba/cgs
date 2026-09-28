const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuToggle && navigation) {
  const openMenuLabel = menuToggle.dataset.labelOpen || 'Ouvrir le menu';
  const closeMenuLabel = menuToggle.dataset.labelClose || 'Fermer le menu';

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? openMenuLabel : closeMenuLabel);
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', openMenuLabel);
      navigation.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', openMenuLabel);
      navigation.classList.remove('is-open');
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
