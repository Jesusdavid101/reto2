let sliderInner = document.querySelector(".carrusel-inner");
let images = sliderInner.querySelectorAll("img");
let index = 0; // Comenzamos en la primera imagen

setInterval(function () {
    // Incrementa el índice para mover al siguiente elemento
    index = (index + 1) % images.length;

    // Calcula el desplazamiento en porcentaje
    let percentage = index * -100;

    // Aplica la transformación
    sliderInner.style.transform = "translateX(" + percentage + "%)";
}, 5000); // Cambia cada 3 segundos
