// JS/slideshow.js
const images = [
  "https://raw.githubusercontent.com/Ap0ne/MBLCustoms/main/assets/images/MBLSlideshow/slide1.jpg",
  "https://raw.githubusercontent.com/Ap0ne/MBLCustoms/main/assets/images/MBLSlideshow/slide2.jpg",
  "https://raw.githubusercontent.com/Ap0ne/MBLCustoms/main/assets/images/MBLSlideshow/slide3.jpg"
];

let currentSlide = 0;
const slideshowContainer = document.getElementById('slideshow');

function showSlide(index) {
  slideshowContainer.style.backgroundImage = `url(${images[index]})`;
  currentSlide = (index + 1) % images.length;
}

setInterval(() => showSlide(currentSlide), 3000);

showSlide(currentSlide);
