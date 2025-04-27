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
    
    // Styles (can also put these in CSS)
    Object.assign(backToTop.style, {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '50px',
      height: '50px',
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      fontSize: '1.5rem',
      cursor: 'pointer',
      opacity: '0',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      zIndex: '99'
    });
  
    // Show/hide logic
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    });
  
    // Smooth scroll
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
  