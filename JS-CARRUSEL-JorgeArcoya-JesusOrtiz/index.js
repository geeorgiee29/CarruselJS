document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".botonTema");
    const body = document.body;

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
        themeToggle.innerHTML = body.classList.contains("dark-theme") ? '<img src="./imagenes/sol.jpg" alt="Sol">' : '<img src="./imagenes/luna.jpg" alt="Luna">';
    });
});   



document.addEventListener("DOMContentLoaded", function() {
    const retroceder = document.querySelector(".flecha-Carrusel1");
    const avanzar = document.querySelector(".flecha-Carrusel2");
    const flechas = document.querySelectorAll(".flechasCarrusel");

    let indiceCarrusel = 0;

    retroceder.addEventListener("click", () => {
        flechas[indiceCarrusel].classList.remove("carousel__item--selected");
        indiceCarrusel = (indiceCarrusel - 1 + flechas.length) % flechas.length;
        flechas[indiceCarrusel].classList.add("carousel__item--selected");
    });

    avanzar.addEventListener("click", () => {
        items[indiceCarrusel].classList.remove("carousel__item--selected");
        indiceCarrusel = (indiceCarrusel + 1) % flechas.length;
        items[indiceCarrusel].classList.add("carousel__item--selected");
    });
});