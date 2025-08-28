document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons within the membership cards
    const planButtons = document.querySelectorAll('.membership-card .btn');

    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest parent card element
            const card = this.closest('.card');
            // Get the plan name from the card's title
            const planName = card.querySelector('.card-title').innerText;

            // Show a confirmation alert
            alert(`You have selected the ${planName} plan. Welcome to the FitZone family!`);
        });
    });
});