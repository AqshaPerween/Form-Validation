// Get form and input elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Form validation function
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.classList.remove('hidden');
    isValid = false;
  } else {
    nameError.classList.add('hidden');
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    isValid = false;
  } else {
    emailError.classList.add('hidden');
  }

  // Password validation
  if (passwordInput.value.length < 8) {
    passwordError.classList.remove('hidden');
    isValid = false;
  } else {
    passwordError.classList.add('hidden');
  }

  // If valid, alert success (for now)
  if (isValid) {
    alert('Form submitted successfully!');
  }
}

// Attach validation to form submit event
form.addEventListener('submit', validateForm);