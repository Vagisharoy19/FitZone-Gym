document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the form from actually submitting
            alert("Login successful! Welcome back.");
            loginForm.reset();
        });
    }
});