// Handling login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and causing the error

    // Get username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Log for debugging
    console.log("Username:", username);
    console.log("Password:", password);

    // Hardcoded credentials check
    const validUsername = "user123";
    const validPassword = "password123";

    // Check if credentials are correct
    if (username === validUsername && password === validPassword) {
        console.log("Login successful!");
        // Redirect to the detection page
        window.location.href = "detect.html";
    } else {
        console.log("Login failed.");
        alert("Invalid username or password.");
    }
});