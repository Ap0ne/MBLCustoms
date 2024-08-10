// JS/slideshow.js
const images = [
  "https://github.com/Ap0ne/MBLCustoms/raw/main/assets/images/MBLSlideshow/slide1.jpg",
  "https://github.com/Ap0ne/MBLCustoms/raw/main/assets/images/MBLSlideshow/slide2.jpg",
  "https://github.com/Ap0ne/MBLCustoms/raw/main/assets/images/MBLSlideshow/slide3.jpg"
];

let currentSlide = 0;
const slideshowContainer = document.getElementById('slideshow');

function showSlide(index) {
  slideshowContainer.style.backgroundImage = `url(${images[index]})`;
  currentSlide = (index + 1) % images.length;
}

setInterval(() => showSlide(currentSlide), 3000);

showSlide(currentSlide);
