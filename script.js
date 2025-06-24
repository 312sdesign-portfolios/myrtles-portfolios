document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer for client pages
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}); 
