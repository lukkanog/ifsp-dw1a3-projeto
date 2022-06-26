const mobileMenuButton = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.nav');


mobileMenuButton.addEventListener('click', () => {
  menu.classList.toggle('nav--open');
});