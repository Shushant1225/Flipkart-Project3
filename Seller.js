// Toggle navigation menu on smaller screens
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const menuIcon = document.querySelector('.menu-icon');
  
    nav.classList.toggle('show');
  }
  
  // Search functionality
  function searchProducts() {
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value.toLowerCase();
  
    // Assume products are stored in an array
    const products = [
      { name: 'Product 1', category: 'Electronics' },
      { name: 'Product 2', category: 'Fashion' },
      // Add more products...
    ];
  
    const searchResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
  
    displaySearchResults(searchResults);
  }
  
  function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
  
    if (results.length > 0) {
      const resultsHTML = results.map((result) => {
        return `
          <div>
            <h2>${result.name}</h2>
            <p>Category: ${result.category}</p>
          </div>
        `;
      }).join('');
  
      searchResultsContainer.innerHTML = resultsHTML;
    } else {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
    }
  }
  
  // Image slider
  let currentSlide = 0;
  
  function showSlide() {
    const slides = document.querySelectorAll('.slider img');
  
    slides.forEach((slide, index) => {
      slide.style.display = 'none';
    });
  
    slides[currentSlide].style.display = 'block';
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % document.querySelectorAll('.slider img').length;
    showSlide();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + document.querySelectorAll('.slider img').length) % document.querySelectorAll('.slider img').length;
    showSlide();
  }
  
  // Initialize image slider
  showSlide();
  
  // Add event listeners
  document.querySelector('.btn').addEventListener('click', searchProducts);
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);
  
  // Optional: Add event listener for menu toggle
  document.querySelector('.menu-icon').addEventListener('click', toggleMenu);