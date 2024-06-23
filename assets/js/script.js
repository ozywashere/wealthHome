const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navToggler = document.querySelector('[data-nav-toggler]');

navToggler.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

navbarLinks.forEach((navbarLink) => {
  navbarLink.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  header.classList[window.scrollY > 0 ? 'add' : 'remove']('active');
});
