// script.js
const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const imagesContainer = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const zoomedImageContainer = document.querySelector('.zoomed-image-container');
const zoomedImage = document.querySelector('.zoomed-image');
const closeZoomBtn = document.querySelector('.close-zoom-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imagesContainer.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imagesContainer.children.length) % imagesContainer.children.length;
  updateCarousel();
});

imagesContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imgUrl = event.target.src;
    zoomedImage.src = imgUrl;
    zoomedImageContainer.style.display = 'flex';
  }
});

closeZoomBtn.addEventListener('click', () => {
  zoomedImageContainer.style.display = 'none';
});

function updateCarousel() {
  const offset = -currentIndex * carousel.offsetWidth;
  imagesContainer.style.transform = `translateX(${offset}px)`;
}
