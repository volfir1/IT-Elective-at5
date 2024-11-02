document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Dummy validation: For demo purposes, we'll assume correct credentials are:
    const correctEmail = 'demo@example.com';
    const correctPassword = 'password123';
  
    // Clear any previous messages
    const messageContainer = document.querySelector('.message-container');
    messageContainer.innerHTML = '';
  
    // Show the loader
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
  
    // Simulate loading for 2 seconds
    setTimeout(() => {
      // Hide the loader after 2 seconds
      loader.style.display = 'none';
  
      // Perform validation
      if (email === correctEmail && password === correctPassword) {
        // Success Message
        const successMessage = document.createElement('div');
        successMessage.classList.add('alert', 'alert-success');
        successMessage.textContent = 'Login successful! Redirecting...';
        messageContainer.appendChild(successMessage);
  
        // Simulate a redirect after an additional 2 seconds
        setTimeout(() => {
          window.location.href = 'dashboard.html'; // Redirect to a dashboard or home page
        }, 2000);
      } else {
        // Error Message
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger');
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        messageContainer.appendChild(errorMessage);
      }
    }, 2000);
  });
  