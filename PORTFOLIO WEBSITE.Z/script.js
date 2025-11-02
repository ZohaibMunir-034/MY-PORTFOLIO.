const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const topBtn = document.getElementById('topBtn');
const themeToggle = document.getElementById('theme-toggle');

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Scroll to Top Button
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    topBtn.classList.remove('hidden');
  } else {
    topBtn.classList.add('hidden');
  }
};

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark/Light Mode Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? "Light Mode"
    : "Dark Mode";
});