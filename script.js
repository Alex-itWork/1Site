document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            if (idx === index) {
                slide.classList.add('active');
            }
        });
    }

    window.moveSlide = function(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Зацикливание
        } else if (currentIndex >= slides.length) {
            currentIndex = 0; // Зацикливание
        }

        showSlide(currentIndex);
    }

    showSlide(currentIndex);
});