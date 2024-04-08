document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector(".botonTema");
    const body = document.body;

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
        themeToggle.innerHTML = body.classList.contains("dark-theme") ? '<img src="./imagenes/sol.jpg" alt="Sol">' : '<img src="./imagenes/luna.jpg" alt="Luna">';
    });
});   



function cambiarOpinion(direccion) {
    // Obtiene todas las opiniones
    var opiniones = document.getElementsByClassName("contenidoCarrusel");
    // Obtiene el índice de la opinión actual
    var indiceActual = 0;
    for (var i = 0; i < opiniones.length; i++) {
        if (opiniones[i].style.display !== "none") {
            indiceActual = i;
            break;
        }
    }
    // Oculta la opinión actual
    opiniones[indiceActual].style.display = "none";
    // Calcula el índice de la siguiente opinión
    var siguienteIndice = indiceActual + direccion;
    // Verifica si el siguiente índice es negativo y ajusta si es necesario
    if (siguienteIndice < 0) {
        siguienteIndice = opiniones.length - 1;
    }
    // Muestra la siguiente opinión
    opiniones[siguienteIndice % opiniones.length].style.display = "flex";
}
// Iniciar el carrusel automáticamente al cargar la página
window.onload = function() {
    iniciarCarruselAutomatico();
};
