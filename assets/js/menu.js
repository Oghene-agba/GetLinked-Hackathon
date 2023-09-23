
//Toggle
const menu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('#close-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
menu.classList.add('is-active');
menuLinks.classList.add('active');
})
closeMenu.addEventListener('click', function() {
closeMenu.classList.remove('is-active');
menuLinks.classList.remove('active');
})