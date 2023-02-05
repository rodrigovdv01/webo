const images = [
    "images/portada-nosotros.jpg",
    "images/portada-nosotros2.jpg",
    "images/portada-nosotros3.jpg",
    "images/portada-nosotros4.jpg",
];

let currentImageIndex = 0;

const sliderImage = document.querySelector("#slider-image");
/*const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");*/

function changeImage() {
    sliderImage.src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    changeImage();
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    changeImage();
}

/*prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);*/

setInterval(nextImage, 4000);