const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});