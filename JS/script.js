document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'assets/images/MBLSlideshow/slide1.jpg',
        'assets/images/MBLSlideshow/slide2.jpg',
        'assets/images/MBLSlideshow/slide3.jpg'
    ];

    let currentIndex = 0;
    const slideshowElement = document.querySelector('.slideshow');

    function showNextImage() {
        slideshowElement.innerHTML = `<img src="${images[currentIndex]}" alt="Slideshow Image">`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    showNextImage();
    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

// Chat initialization and functionality will be added here
