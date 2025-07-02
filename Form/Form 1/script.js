document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately

    // Get the form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();  // Reset the form fields
    } else {
        document.getElementById('errorMessage').style.display = 'block';  // Show error message
    }
});