// script.js

// Функция для управления каруселью

let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {

    slides.forEach((slide, i) => {

        slide.classList.toggle('active', i === index);

    });

}

function moveSlide(direction) {

    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    showSlide(currentSlide);

}

// Инициализация карусели

showSlide(currentSlide);

// Обработка кликов по кнопкам обратной связи

document.querySelectorAll('.contact-button').forEach(button => {

    button.addEventListener('click', () => {

        alert('Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.');

    });

});

// Плавная прокрутка к якорям

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});

