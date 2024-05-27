const images = [
  { src: 'images/image1.jpg', alt: 'Image 1', price: '10.00' },
  { src: 'images/image2.jpg', alt: 'Image 2', price: '15.00' },
  { src: 'images/image3.jpg', alt: 'Image 3', price: '20.00' }
];

window.onload = () => {
  const gallery = document.getElementById('gallery');
  images.forEach(image => {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <p>Price: $${image.price}</p>
      <button onclick="buyImage('${image.alt}', '${image.price}')">Buy Now</button>
    `;
    gallery.appendChild(card);
  });
};

function buyImage(alt, price) {
  alert(`You selected ${alt} with a price of $${price}. Payment integration will be handled separately.`);
}
