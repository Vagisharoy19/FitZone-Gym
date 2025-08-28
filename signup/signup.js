document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the form from actually submitting

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return; // Stop the function here
            }

            alert("Sign up successful! You can now log in.");
            signupForm.reset();

            // Optional: Redirect the user to the login page after success
            // window.setTimeout(() => {
            //     window.location.href = 'login.html';
            // }, 1500);
        });
    }
});