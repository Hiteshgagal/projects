document.getElementById('extremeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle validation first
  
    let isValid = true;
  
    // Clear previous error messages
    clearErrors();
  
    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === "") {
      showError('name', 'Name is required');
      isValid = false;
    }
  
    // Validate Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      showError('email', 'Please enter a valid email');
      isValid = false;
    }
  
    // Validate Message
    const message = document.getElementById('message').value;
    if (message.trim() === "") {
      showError('message', 'Message cannot be empty');
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById('extremeForm').reset();
      document.getElementById('success-message').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('success-message').classList.add('hidden');
      }, 5000);
    }
  });
  
  function showError(field, message) {
    const errorSpan = document.getElementById(
        ${field}-error
    );
    errorSpan.textContent = message;
  }
  
  function clearErrors() {
    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(errorSpan => {
      errorSpan.textContent = '';
    });
  }
  