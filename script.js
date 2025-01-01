// Пример JavaScript для добавления интерактивности
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.');
    });

    // Добавление плавного скролла для ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});