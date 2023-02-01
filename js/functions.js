let ig = document.getElementsByClassName('ig');
for (let i = 0; i < ig.length; i++) {
    ig[i].addEventListener("click", abrirIg);
}

let wa = document.getElementsByClassName('wa');
for (let i = 0; i < wa.length; i++) {
    wa[i].addEventListener("click", abrirWhatsapp);
}

let comprar = document.getElementsByClassName('comprar');
for (let i = 0; i < comprar.length; i++) {
    comprar[i].addEventListener("click", abrirWhatsapp);
}

function abrirWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=51913687390");
}

function abrirIg() {
    window.open("https://www.instagram.com/webo.pe/?hl=es-la");
}