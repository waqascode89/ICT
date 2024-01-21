let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slider li').length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider ul');
    const newTransformValue = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + newTransformValue + ')';
}

let i = 0;
let time = 3000;
let images = [];

images[1] = 'images/img 1.jpg';
images[2] = 'images/img 2.jpg';
images[3] = 'images/img 3.jpg';

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else[
        i = 1
    ]
    setTimeout("changeImg()", time);
}

window.onload = changeImg;


