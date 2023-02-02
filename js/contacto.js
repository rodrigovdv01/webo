let cerrar = document.querySelector('.cerrar');
let headerOut = document.querySelector('.header-out');
let menu = document.querySelector('.display-menu');

cerrar.addEventListener("click", () => {
    headerOut.style.display = 'none';
})

menu.addEventListener("click", () => {
    headerOut.style.display = 'block';
})