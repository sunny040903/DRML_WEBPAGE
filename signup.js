// Handle the Signup Form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;




    // Simulate saving user data (you would typically send this to a backend server)
    console.log('Signup Successful');
    console.log({ fullname, email, username, password });

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');



    // Redirect to the login page after signup
    alert('Account created successfully. Please log in.');
    window.location.href = 'login.html';
});