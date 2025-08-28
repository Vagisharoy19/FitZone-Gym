document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the default form submission
            
            // You can get all the form values like this:
            const name = document.getElementById('nameInput').value;
            const trainer = document.getElementById('trainerSelect').value;

            alert(`Thank you, ${name}! Your request to book a session with ${trainer} has been received. We will confirm your slot via email shortly.`);
            
            // Reset the form fields
            bookingForm.reset();
        });
    }
});