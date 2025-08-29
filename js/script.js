// =======================
// Prompt user name
// =======================
document.addEventListener('DOMContentLoaded', function () {
  let userName = '';
  while (!userName || userName.trim() === '') {
    userName = prompt("Enter your name to continue:");
  }
  document.getElementById('user-greeting').textContent = userName;
  document.getElementById('main-content').classList.remove('hidden');
});