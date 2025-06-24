document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer for client pages
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}); 
 <script>
        // ******************************************************
        // IMPORTANT: CHANGE THIS PASSWORD FOR EACH CLIENT!
        // ******************************************************
        const correctPassword = "*******"; // <--- CHANGE THIS TEXT!

        function checkPassword() {
            const enteredPassword = document.getElementById('passwordInput').value;
            const errorMessage = document.getElementById('errorMessage');
            const loginForm = document.getElementById('login-form');
            const portfolioContent = document.getElementById('portfolio-content');

            if (enteredPassword === correctPassword) {
                loginForm.style.display = 'none'; // Hide login form
                portfolioContent.style.display = 'block'; // Show portfolio content
                errorMessage.textContent = ''; // Clear any error message
            } else {
                errorMessage.textContent = 'Incorrect password. Please try again.';
            }
        }
    </script>
