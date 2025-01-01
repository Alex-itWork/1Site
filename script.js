// Функция для отображения или скрытия этапов работы
function toggleStages() {
    const container = document.querySelector('.container');
    container.style.display = (container.style.display === 'block') ? 'none' : 'block';
}

// Функция для плавной прокрутки к якорю
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Добавление обработчиков событий на навигационные ссылки
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#contacts') {
                toggleStages();
            } else {
                smoothScroll(targetId);
            }
        });
    });
});