document.addEventListener('DOMContentLoaded', function() {
    // Get all text containers
    const textContainers = document.querySelectorAll('.text-container');
    
    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Optional: remove the class when not in view
                // Uncomment to have elements fade out when scrolled away
                // entry.target.classList.remove('visible');
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.3, // trigger when 30% of the element is visible
        rootMargin: '0px'
    });
    
    // Observe all text containers
    textContainers.forEach(container => {
        observer.observe(container);
    });
    
    // Make the first section visible immediately
    setTimeout(() => {
        document.querySelector('#intro .text-container').classList.add('visible');
    }, 500);
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 