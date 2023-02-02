/*====================================================================== *======================================================================  */
// Función para agregar eventos a elementos
function agregarEvento(clase, funcion) {
    const elementos = document.getElementsByClassName(clase);
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("click", funcion);
    }
}
// Agregar eventos a botones
agregarEvento("ig", abrirIg);
agregarEvento("wa", abrirWhatsapp);
agregarEvento("comprar", abrirWhatsapp);

function abrirWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=51913687390");
}

function abrirIg() {
    window.open("https://www.instagram.com/webo.pe/?hl=es-la");
}
/*====================================================================== *======================================================================  */
// Funciones para el Slider

const slider = document.querySelector('.slider');
const products = document.querySelectorAll('.product');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let current = 0;
let isEnabled = true;

const breakpoints = {
    desktop: 1024,
    tablet: 768,
    mobile: 600
};
const translateValues = {
    desktop: 25,
    tablet: 33.3,
    mobile: 50,
    small: 100
};

function getSliderTransform(windowWidth) {
    let viewport;

    if (windowWidth >= breakpoints.desktop) {
        viewport = 'desktop';
    } else if (windowWidth >= breakpoints.tablet) {
        viewport = 'tablet';
    } else if (windowWidth >= breakpoints.mobile) {
        viewport = 'mobile';
    } else {
        viewport = 'small';
    }

    return `translateX(-${current * translateValues[viewport]}%)`;
}

function changeCurrent(newCurrent) {
    current = newCurrent;
    slider.style.transform = getSliderTransform(window.innerWidth);

    prevBtn.disabled = current === 0;
    prevBtn.classList.toggle("disabled", current === 0);

    nextBtn.disabled = current === products.length - 1;
    nextBtn.classList.toggle("disabled", current === products.length - 1);
}

/*====================================================================== */


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

/*====================================================================== */



/* ANTES DE GPT:
function getSliderTransform(windowWidth, current) {
    if (windowWidth >= 1024) {
        return `translateX(-${current * 25}%)`;
    } else if (windowWidth >= 768) {
        return `translateX(-${current * 33.3}%)`;
    } else if (windowWidth >= 600) {
        return `translateX(-${current * 50}%)`;
    } else {
        return `translateX(-${current * 100}%)`;
    }
}*/
/* ANTES DE CHATGPT:
function changeCurrent(newCurrent) {
    current = newCurrent;
    slider.style.transform = getSliderTransform();

    if (current === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add("disabled");
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove("disabled");
    }

    if (current === products.length - 1) {
        nextBtn.disabled = true;
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabled");
    }
}*/

/* ANTES DE GPT:
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
}*/