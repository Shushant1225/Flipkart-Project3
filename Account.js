
// Search bar functionality
const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
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

// Profile information save button
const saveButton = document.querySelector('.section2 button');

// Add save button to profile information section
const profileInfoSection = document.querySelector('.section2');
const saveBtn = document.createElement('button');
saveBtn.textContent = 'Save Changes';
saveBtn.classList.add('save-btn');
profileInfoSection.appendChild(saveBtn);

saveButton.addEventListener('click', () => {
  const firstName = document.querySelector('input[placeholder="First name"]').value;
  const lastName = document.querySelector('input[placeholder="Last name"]').value;
  const email = document.querySelector('input[placeholder="Enter your Email id"]').value;
  const mobileNumber = document.querySelector('input[placeholder="Enter your Mobile No."]').value;

  alert(`Changes saved!\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMobile Number: ${mobileNumber}`);
});

// FAQ section toggle
const faqHeader = document.querySelector('.section2 h2:last-child');
const faqText = document.querySelector('.section2 p');

faqHeader.addEventListener('click', () => {
  faqText.classList.toggle('show');
});