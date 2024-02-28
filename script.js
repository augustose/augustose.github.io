const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
});