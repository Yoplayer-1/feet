document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery-item', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  const gallery = document.getElementById('gallery');
  const images = [
    { src: 'images/image1.jpg', alt: 'Image 1', price: '10.00' },
    { src: 'images/image2.jpg', alt: 'Image 2', price: '15.00' },
    { src: 'images/image3.jpg', alt: 'Image 3', price: '20.00' }
  ];

  images.forEach(image => {
    const item = document.createElement('a');
    item.href = image.src;
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <p>Price: $${image.price}</p>
      <button onclick="buyImage('${image.alt}', '${image.price}')">Buy Now</button>
    `;
    gallery.appendChild(item);
  });
});

function buyImage(alt, price) {
  alert(`You selected ${alt} with a price of $${price}. Payment integration will be handled separately.`);
}
