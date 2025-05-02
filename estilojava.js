// Funciones para el carrusel de imágenes
var index = 0;

function nextImg() {
    var images = document.querySelectorAll(".carrusel-images img");
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }
    document.querySelector(".carrusel-images").style.transform = "translateX(" + (-index * 100) + "%)";
}

function prevImg() {
    var images = document.querySelectorAll(".carrusel-images img");
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    document.querySelector(".carrusel-images").style.transform = "translateX(" + (-index * 100) + "%)";
}

// Funciones para el carrusel de reseñas
var reseñaIndex = 0;

function resSiguiente() {
    var reseñas = document.querySelectorAll(".carrusel-Res");
    if (reseñaIndex < reseñas.length - 1) {
        reseñaIndex++;
    } else {
        reseñaIndex = 0;
    }
    document.querySelector(".carrusel-contentRes").style.transform = "translateX(" + (-reseñaIndex * 100) + "%)";
}

function resAnterior() {
    var reseñas = document.querySelectorAll(".carrusel-Res");
    if (reseñaIndex > 0) {
        reseñaIndex--;
    } else {
        reseñaIndex = reseñas.length - 1;
    }
    document.querySelector(".carrusel-contentRes").style.transform = "translateX(" + (-reseñaIndex * 100) + "%)";
}
