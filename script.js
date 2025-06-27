document.addEventListener('DOMContentLoaded', function () {
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
    loginWrapper.style.display = 'none';
    portfolioContent.style.display = 'block';
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Incorrect password. Please try again.';
  }
}

// Optional: define `downloadZip()` if you're including ZIP download functionality
function downloadZip() {
  alert("Download functionality not yet implemented.");
}
