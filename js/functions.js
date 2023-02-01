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

// Slider

const slider = document.querySelector('.slider');
const products = document.querySelectorAll('.product');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let current = 0;
let isEnabled = true;


function changeCurrent(newCurrent) {
    current = newCurrent;
    slider.style.transform = `translateX(-${current * 25}%)`;

    if (current === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove("disabled");
    }

    if (current === products.length - 4) {
        nextBtn.disabled = true;
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabled");
    }
}

prevBtn.addEventListener("click", () => {
    if (isEnabled) {
        isEnabled = false;
        if (current === 0) {
            changeCurrent(products.length - 1);
        } else {
            changeCurrent(current - 1);
        }
        setTimeout(() => {
            isEnabled = true;
        }, 500);
    }
});

nextBtn.addEventListener("click", () => {
    if (isEnabled) {
        isEnabled = false;
        if (current === products.length - 1) {
            changeCurrent(0);
        } else {
            changeCurrent(current + 1);
        }
        setTimeout(() => {
            isEnabled = true;
        }, 500);
    }
});