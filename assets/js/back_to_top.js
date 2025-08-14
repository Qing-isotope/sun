// backToTop.js

document.addEventListener('DOMContentLoaded', () => {
    // Create the button element
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.textContent = '↑';
  
    // Append to the body
    document.body.appendChild(backToTopBtn);
  
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
  
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
  
    // Style and behavior
    const backToTop = document.getElementById('back-to-top');
      
    // Show/hide logic
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    });
  
    // Smooth scroll
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
  