// script.js

// ========================
// 1. Menú Responsive
// ========================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Activa o desactiva el menú
    });
}

// ========================
// 2. Animaciones con scroll
// ========================
const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Activa animación
        }
    });
});

elements.forEach(el => observer.observe(el));

// ========================
// 3. Botones interactivos
// ========================
// Efecto visual al hacer clic en botones
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 300);
    });
});

// ========================
// 4. Carrusel de imágenes
// ========================
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

if (slides.length > 0) {
    showSlide(currentIndex);

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    }
}
