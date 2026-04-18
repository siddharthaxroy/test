// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('.header__nav');

  if (hamburgerBtn && nav) {
    hamburgerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      hamburgerBtn.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('.menu__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!hamburgerBtn.contains(e.target) && !nav.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  }
});
