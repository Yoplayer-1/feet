// script.js
const carousel = document.querySelector('.carousel');
const imagesContainer = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imagesContainer.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imagesContainer.children.length) % imagesContainer.children.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * carousel.offsetWidth;
  imagesContainer.style.transform = `translateX(${offset}px)`;
}
