const slides = document.querySelectorAll('.slide');

let actual = 0;

setInterval(() => {

    slides[actual].classList.remove('activo');

    actual++;

    if (actual >= slides.length) {
        actual = 0;
    }

    slides[actual].classList.add('activo');

}, 4000);

