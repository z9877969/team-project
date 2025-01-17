const openMenuButton = document.querySelector('.js-open-menu');
const mobileMenu = document.querySelector('.js-menu-container');

// Відкриття/закриття меню
openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-open');
});

// Закриття меню при кліку за межами
window.addEventListener('click', event => {
  if (
    mobileMenu.classList.contains('is-open') &&
    !mobileMenu.contains(event.target) &&
    !openMenuButton.contains(event.target)
  ) {
    mobileMenu.classList.remove('is-open');
  }
});

// Закриття меню при натисканні на пункт меню
mobileMenu.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    // Перевірка, чи це посилання
    mobileMenu.classList.remove('is-open');
  }
});
