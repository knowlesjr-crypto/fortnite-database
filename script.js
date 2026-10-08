document.addEventListener('DOMContentLoaded', () => {
  const currentYearEl = document.querySelector('[data-year]');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  const activeLinks = document.querySelectorAll('.main-nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  activeLinks.forEach((link) => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
