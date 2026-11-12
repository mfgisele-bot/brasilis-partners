const menu = document.querySelector('#navbarSupportedContent');
const navbar = menu.closest('nav');
const dropdown = menu.querySelector('.dropdown');
menu.addEventListener('show.bs.collapse', () => navbar.classList.add('opened'));
menu.addEventListener('hide.bs.collapse', () => navbar.classList.remove('opened'));
dropdown.addEventListener('show.bs.dropdown', () => dropdown.classList.add('open'));
dropdown.addEventListener('hide.bs.dropdown', () => dropdown.classList.remove('open'));

menu.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]:not([data-bs-toggle])');
  if (link && menu.classList.contains('show')) {
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  }
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches && typeof jarallax === 'function') {
  jarallax(document.querySelectorAll('.mbr-parallax-background'));
}
