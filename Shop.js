// Search bar functionality
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm !== '') {
    window.location.href = `search.html?query=${searchTerm}`;
  }
});

// Navigation menu toggle
const navToggle = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.toggle('active');
  });
});

// Image sliders
const slide1 = document.querySelector('.slide2 img');
const slide2 = document.querySelectorAll('.slide img');
const slide3 = document.querySelectorAll('.section img');

let currentSlide = 0;
const slides = [slide1, ...slide2, ...slide3];

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000);

// Product hover effects
const products = document.querySelectorAll('.section img');

products.forEach((product) => {
  product.addEventListener('mouseover', () => {
    product.style.transform = 'scale(1.1)';
  });
  product.addEventListener('mouseout', () => {
    product.style.transform = 'scale(1)';
  });
});

// Cart and login functionality
const cartButton = document.querySelector('.cart-button');
const loginButton = document.querySelector('.login-button');
const cartContainer = document.querySelector('.cart-container');
const loginContainer = document.querySelector('.login-container');

cartButton.addEventListener('click', () => {
  cartContainer.classList.toggle('active');
});

loginButton.addEventListener('click', () => {
  loginContainer.classList.toggle('active');
});

// Add event listener to document to close cart and login containers when clicked outside
document.addEventListener('click', (e) => {
  if (!cartContainer.contains(e.target) && !cartButton.contains(e.target)) {
    cartContainer.classList.remove('active');
  }
  if (!loginContainer.contains(e.target) && !loginButton.contains(e.target)) {
    loginContainer.classList.remove('active');
  }
});