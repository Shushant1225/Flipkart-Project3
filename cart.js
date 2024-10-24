// Select elements
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search button');
const navMenu = document.querySelector('nav ul');
const navToggle = document.querySelector('.logo');
const cartButton = document.querySelector('.slide .btn');
const cart = document.querySelector('.slide');

// Search bar functionality
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    window.location.href = `search.html?q=${searchQuery}`;
  } else {
    alert('Please enter a search query');
  }
});

// Navigation menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cart functionality
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

updateCart();

cartButton.addEventListener('click', () => {
  window.location.href = 'Shop.html';
});

function updateCart() {
  const cartCount = document.createElement('span');
  cartCount.textContent = `(${cartItems.length})`;
  cartButton.appendChild(cartCount);
}

// Add event listener to cart
cart.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const itemId = e.target.dataset.id;
    cartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
  }
});

// Form validation for search bar
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') {
    searchButton.disabled = true;
  } else {
    searchButton.disabled = false;
  }
});
