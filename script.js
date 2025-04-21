// Script general pour toutes les pages
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.liens_nav');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});