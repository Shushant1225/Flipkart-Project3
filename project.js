// Search bar functionality
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.carditem, .carditem1');

  cards.forEach((card) => {
    const productName = card.querySelector('p').textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Navigation menu toggle
const navLinks = document.querySelectorAll('nav ul li a');
const logo = document.querySelector('.logo img');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    logo.classList.toggle('active');
  });
});

// Image zoom on hover
const images = document.querySelectorAll('.card img, .card1 img');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.green');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.previousElementSibling.textContent;
    const productPrice = button.nextElementSibling.textContent;

    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      ${productName}
      ${productPrice}
      <button class="remove-from-cart">Remove</button>
    `;

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart-container');
    cartContainer.appendChild(cartItem);

    document.body.appendChild(cartContainer);

    button.textContent = 'Added to Cart';
    button.disabled = true;

    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');

    removeFromCartButtons.forEach((removeButton) => {
      removeButton.addEventListener('click', () => {
        cartContainer.remove();
        button.textContent = 'Grab Now!!!';
        button.disabled = false;
      });
    });
  });
});