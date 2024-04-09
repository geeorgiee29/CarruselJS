document.addEventListener("DOMContentLoaded", function() {
    //Decalramos las variables para el boton de cambio de tema
    const themeToggle = document.querySelector(".botonTema");
    const body = document.body;

    //Lees la accion de hacer clic en el boton de cambio de tema, activas los estilos con la clase dark-theme y cambias la foto del boton
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
        themeToggle.innerHTML = body.classList.contains("dark-theme") ? '<img src="./imagenes/sol.jpg" alt="Sol">' : '<img src="./imagenes/luna.jpg" alt="Luna">';
    });
});   


let opiniones = [{picture: "./imagenes/fotoPersona.jpg", nombre:"Pedro Rodriguez", texto:"La plataforma de programación Programming es increíblemente intuitiva y fácil de usar. Me encanta la variedad de herramientas y recursos que ofrece, lo que ha hecho que mi experiencia de aprendizaje sea muy gratificante. Recomiendo esta plataforma a cualquier persona que esté buscando mejorar sus habilidades de programación de forma efectiva y divertida, lo recomieno totalmente no me arrepiento de nada.",
                 fecha: "6-4-2024"},
                {picture: "./imagenes/persona2.jpg", nombre:"Juan Lopez", texto:"He probado varios cursos en línea de programación, pero debo decir que el contenido de la plataforma Programming es simplemente excepcional. Los instructores son expertos en la materia y la forma en que presentan los conceptos complejos de manera clara y concisa es impresionante. Gracias a esta plataforma, he logrado avanzar significativamente en mi carrera como desarrollador. ¡No puedo recomendarla lo suficiente!",
                fecha: "5-4-2024"},
                {picture: "./imagenes/persona3.jpg", nombre:"Maria Garcia", texto:"La comunidad en torno a la plataforma Programming es simplemente asombrosa. La posibilidad de conectarse con otros desarrolladores, compartir conocimientos y colaborar en proyectos ha sido una experiencia enriquecedora. Además, la amplia gama de cursos y recursos disponibles me ha permitido expandir mis habilidades de programación de una manera que nunca pensé posible. Definitivamente, esta plataforma es un tesoro para cualquier entusiasta de la programación.",
                fecha: "4-4-2024"}
            ];

//Indice para indicar la opinion actual
let indiceOpiniones = 0;
const opinionesDisplay = document.getElementById("opinion");

//Funcion para mostrar la opinion del array en el carrusel
function mostrarOpinion(){
    const opinionActual = opiniones[indiceOpiniones];
    opinionesDisplay.innerHTML = `
    <img src="${opinionActual.picture}" alt="Avatar de Autor" id="autorFoto">
    <h2 id="autorOpinion">${opinionActual.nombre}</h2>
    <p id="textoOpinion">${opinionActual.texto}</p>
    <span id="opinionFecha" class="date">${opinionActual.fecha}</span>
    `
}

function avanzar(){
    indiceOpiniones = (indiceOpiniones + 1) % opiniones.length;
    mostrarOpinion();
}

function retroceder(){
    indiceOpiniones = (indiceOpiniones - 1 + opiniones.length) % opiniones.length;
    mostrarOpinion();
}

//Mostrar la primera opinion al cargar la pagina
mostrarOpinion();




// Función para iniciar el carrusel automático
 function iniciarCarruselAutomatico() {
    temporizadorCarrusel = setInterval(function() {
        avanzar();
    }, 3000); // Cambia de opinión cada 3 segundos
}

// Función para detener el carrusel automático
function detenerCarrusel() {
    clearInterval(temporizadorCarrusel);
}

// Función para reiniciar el carrusel automático después de un clic
function reiniciarCarrusel() {
    iniciarCarruselAutomatico();
}

// Iniciar el carrusel automáticamente al cargar la página
window.onload = function() {
    iniciarCarruselAutomatico();
}; 


//Funcion para mostrar el formulario
function mostrarFormulario() {
            //Declaramos las variables para ocultar y mostrar el formulario
            const formulario = document.getElementById("formulario");
            const botonFormulario = document.querySelector(".botonformulario");
            //Al darle al boton se muestra el formulario y se oculta el boton
            formulario.style.display = "block";
            botonFormulario.style.display = "none";
        }
        //Lees la accion de hacer clic en el boton con el id cancelar
        document.getElementById("cancelar").addEventListener("click", function () {
            //Declaramos las variables para ocultar y mostrar el formulario
            const formulario = document.getElementById("formulario");
            const botonFormulario = document.querySelector(".botonformulario");
            //Al darle al boton se muestra el boton y se oculta el formulario
            formulario.style.display = "none";
            botonFormulario.style.display = "block";
        });
