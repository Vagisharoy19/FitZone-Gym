document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#filter-controls .btn-filter');
    const classCells = document.querySelectorAll('.schedule-table td[data-class]');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Show/hide class cells based on filter
            classCells.forEach(cell => {
                if (filter === 'all' || cell.getAttribute('data-class') === filter) {
                    cell.classList.remove('filtered-out');
                } else {
                    cell.classList.add('filtered-out');
                }
            });
        });
    });
});