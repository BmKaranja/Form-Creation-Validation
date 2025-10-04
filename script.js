document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Email must contain "@" and "."');
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.style.color = "#28a745"; // green
      feedbackDiv.textContent = "Registration successful";
      form.reset();
    } else {
      feedbackDiv.style.color = "#dc3545"; // red
      feedbackDiv.innerHTML = messages.join('<br>');
    }
  });
});