document.addEventListener('DOMContentLoaded', function () {
    // Set the current year in the footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// ******************************************************
// IMPORTANT: CHANGE THIS PASSWORD FOR EACH CLIENT!
// ******************************************************
const correctPassword = "Batty"; // 🔑 Customize this per client!

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginWrapper = document.getElementById('login-wrapper');
    const portfolioContent = document.getElementById('portfolio-content');

    if (enteredPassword === correctPassword) {
        loginWrapper.style.display = 'none';              // Hide login section
        portfolioContent.style.display = 'block';         // Show portfolio
        errorMessage.textContent = '';                    // Clear error
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
