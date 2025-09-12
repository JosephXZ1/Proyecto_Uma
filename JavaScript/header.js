// - - - - - JS para el NavBar - - - - -
const btn = document.querySelector(".headerButton");
const nav = document.querySelector(".navBar");

btn.addEventListener("click", (e) =>
{
    e.preventDefault(); // evitar que el <a> recargue la página
    nav.classList.toggle("active"); // alterna mostrar/ocultar
});

// - - - - - JS para el Botón de menú - - - - -
const header = document.querySelector("header");
const headerButton = document.querySelector(".headerButton img");

//Esto cambia la imagen del botón al hacer scroll
window.addEventListener("scroll", () => 
{
    if (window.scrollY > 50)
    {
        header.classList.add("scrolled");
        headerButton.src = "Multimedia/Imagenes/menu1.png"; // Imagen al hacer scroll
    }
    else
    {
        header.classList.remove("scrolled");
        headerButton.src = "Multimedia/Imagenes/menu2.png"; // Imagen inicial
    }
});