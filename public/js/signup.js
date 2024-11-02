document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsChecked = document.getElementById('terms').checked;
  
    // Clear any previous messages
    const messageContainer = document.querySelector('.message-container');
    messageContainer.innerHTML = ''; // Clear previous messages
  
    // Show the loader
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'block';
    }
  
      // Hide the loader
      if (loader) {
        loader.style.display = 'none';
      }
  
      // Form validation
      if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
        messageContainer.innerHTML = '<div class="alert alert-danger">Please fill out all fields.</div>';
      } else if (password !== confirmPassword) {
        messageContainer.innerHTML = '<div class="alert alert-danger">Passwords do not match.</div>';
      } else if (!termsChecked) {
        messageContainer.innerHTML = '<div class="alert alert-danger">Please accept the terms and conditions.</div>';
      } else {
        // Simulate successful registration
        messageContainer.innerHTML = '<div class="alert alert-success">Registration successful! Redirecting...</div>';
        setTimeout(() => {
          window.location.href = './main.html'; // Redirect to the dashboard or homepage
        }, 1500);
      }
    });
    
  