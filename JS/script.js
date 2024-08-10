document.addEventListener('DOMContentLoaded', function () {
    // Slideshow logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('#slideshow img');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000);

    // Chat logic
    const chatHeader = document.getElementById('chat-header');
    const chatContent = document.getElementById('chat-content');
    
    chatHeader.addEventListener('click', function () {
        chatContent.classList.toggle('hidden');
    });

    // Implement Facebook API to check employee status
    fetch('https://graph.facebook.com/100011102584965?fields=is_online&access_token=7bd3a0bc6e56a937ec76d42c13337d4a')
        .then(response => response.json())
        .then(data => {
            // Handle employee status data
            console.log(data.is_online);
        })
        .catch(error => console.error('Error fetching employee status:', error));
});
