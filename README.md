# Form Validation with JavaScript and Tailwind CSS

This project demonstrates form validation using JavaScript and styled with Tailwind CSS. The form includes fields for name, email, and password with real-time error messages.

---

## Features

- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly UI.
- **Real-Time Validation**: Displays error messages when inputs are invalid.
- **Interactive Feedback**: Error messages appear and disappear dynamically based on user input.

---

## Technologies Used

- **HTML**: Structure of the form.
- **Tailwind CSS**: Styling the form with utility-first CSS classes.
- **JavaScript**: Form validation logic.

---

## Form Validation Rules

1. **Name**: Required. The field cannot be empty.
2. **Email**: Must be a valid email address format.
3. **Password**: Minimum of 8 characters.

---

## Project Structure

```plaintext
project/
├── index.html       # Main HTML file
├── script.js        # JavaScript for validation logic
├── README.md        # Project documentation

```
## Code Highlights
HTML
- Form is structured with clear lables, input fields and error message placeholders.
- Example:
  ```html
  <div class="mb-4">
  <label for="name" class="block text-gray-700 mb-2">Name</label>
  <input id="name" type="text" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name">
  <p id="nameError" class="text-red-500 text-sm mt-1 hidden">Name is required.</p></div>
  ```
JavaScript
- form validation checks for:
  - Empty fields.
  - Valid email format using a regex.
  - Password length.
- Example :
  ```js
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    isValid = false;
  } else {
    emailError.classList.add('hidden');
  }
  ```
  ## Demo
  Here's how the form behaves:
  1. Displays an error if a required field is empty or invalid.
  2. Validates fields when the user interacts and updates the form.
  3. Displays a success alert when the form is submitted successfully.


