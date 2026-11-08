//! Elementos del menú
const menu = document.querySelector('.opcionNav');
const abrirMenu = document.querySelector('.navBar');
const cerrarMenu = document.querySelector('.closeIcon');

//! Abrir menú
abrirMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

//! Cerrar menú
cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

//! Cerrar al seleccionar una opción
const enlaces = document.querySelectorAll('.navLink a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});