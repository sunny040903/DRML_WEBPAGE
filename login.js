// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for the demonstration purpose
    const validUsername = "user123";
    const validPassword = "password123";

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert('Login successful!');
        window.location.href = 'work.html'; // Redirect to the next page
    } else {
        alert('Invalid username or password.');
    }
    if (username === validUsername && password === validPassword) {
        // On successful login, redirect the user to the next page
        window.location.href = 'work.html';
    } else {
        alert('Invalid username or password.');
    }
});