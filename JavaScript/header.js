// - - - - - JS para el control de la transparencia del color de fondo del header y cambio de imagen del el Botón de menú - - - - -
const header = document.querySelector("header"); //Todo el header
const headerButtonImg = document.querySelector(".headerButton img"); //Solo la imagen del boton

//Evento de ventana al hacer scroll
window.addEventListener("scroll", () => 
{
    if (window.scrollY > 50) //Si se hace mas de 50px de scroll vertical
    {
        header.classList.add("scrolled"); //Busca en el CSS anclado a la pagina con classlist y añade .scrolled
        headerButtonImg.src = "Multimedia/Imagenes/menu1.png"; //busca la imagen al hacer scroll en las carpetas
    }
    else
    {
        header.classList.remove("scrolled"); //Lo mismo que antes pero en vez de añadir, la quita
        headerButtonImg.src = "Multimedia/Imagenes/menu2.png";
    }
});

// - - - - - JS para el NavBar (el menu hamburguesa) - - - - -
const headerButton = document.querySelector(".headerButton"); //El boton como tal del header
const burgerMenu = document.querySelector(".navBar"); //El menu hamburguesa

//Evento para activar el menu hamburguesa con un click
headerButton.addEventListener("click", (event) =>
{
    event.preventDefault(); //evitar que el <a> recargue la página
    burgerMenu.classList.toggle("active"); //alterna mostrar/ocultar (binario)
});