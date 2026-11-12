const menu = document.querySelector('#navbarSupportedContent');
const navbar = menu.closest('nav');
menu.addEventListener('show.bs.collapse', () => navbar.classList.add('opened'));
menu.addEventListener('hide.bs.collapse', () => navbar.classList.remove('opened'));

menu.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]:not([data-bs-toggle])');
  if (link && menu.classList.contains('show')) {
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  }
});

if (!matchMedia('(prefers-reduced-motion: reduce)').matches && typeof jarallax === 'function') {
  jarallax(document.querySelectorAll('.mbr-parallax-background'));
}
