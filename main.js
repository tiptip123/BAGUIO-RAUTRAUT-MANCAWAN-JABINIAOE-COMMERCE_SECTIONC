// Function to handle login button click event
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle login button click event
    function handleLoginButtonClick(event) {
        event.preventDefault(); // Prevent form submission

        // Get email and password input values
        var emailInput = document.getElementById('login-email').value.trim();
        var passwordInput = document.getElementById('login-pass').value.trim();

        // Check if email and password are not empty
        if (emailInput !== '' && passwordInput !== '') {
            // Redirect to the homepage
            window.location.href = "home.html";
        } else {
            // Display an alert message indicating that email and password are required
            alert("Please enter both email and password.");
        }
    }

    // Find the login button element
    var loginButton = document.querySelector('.login__button');

    // Add click event listener to the login button
    loginButton.addEventListener('click', handleLoginButtonClick);
});

// Function to show/hide password
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

    iconEye.addEventListener('click', () => {
        if(input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};

// Call showHiddenPass function
showHiddenPass('login-pass','login-eye');
