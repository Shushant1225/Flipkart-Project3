// Request OTP button functionality
const requestOtpButton = document.querySelector('.btn1');
const otpInput = document.getElementById('otp');

requestOtpButton.addEventListener('click', (e) => {
  e.preventDefault();
  const otpValue = otpInput.value.trim();

  if (otpValue.length === 10) { // Assuming 10-digit phone number or OTP
    alert('OTP sent successfully!');
    // Add logic to send OTP to server-side for verification
  } else {
    alert('Invalid phone number or OTP!');
  }
});

// Form validation
const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const otpValue = otpInput.value.trim();

  if (otpValue.length === 10) {
    loginForm.action = 'form1.php'; // Assuming server-side script
    loginForm.method = 'post';
    loginForm.submit();
  } else {
    alert('Invalid phone number or OTP!');
  }
});

// Search bar functionality
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Add logic to search products and display results
  alert(`Searching for "${searchTerm}"...`);
});

// Navigation menu toggle
const navLinks = document.querySelectorAll('nav ul li a');
const logo = document.querySelector('.logo img');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    logo.classList.toggle('active');
  });
});