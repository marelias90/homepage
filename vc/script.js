// Martin Eliason PE & VC Landing Page
// JavaScript for Scroll Reveal Effects

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
    
    // Handle scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            // Scroll to the next section
            const currentSection = document.querySelector('.scroll-section:in-view');
            const nextSection = currentSection.nextElementSibling;
            
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            // Find current section and scroll to next
            const sections = document.querySelectorAll('.scroll-section');
            let currentIndex = 0;
            
            // Find the section currently in view
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentIndex = index;
                }
            });
            
            // Scroll to next section if exists
            if (currentIndex < sections.length - 1) {
                sections[currentIndex + 1].scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (e.key === 'ArrowUp') {
            // Find current section and scroll to previous
            const sections = document.querySelectorAll('.scroll-section');
            let currentIndex = 0;
            
            // Find the section currently in view
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentIndex = index;
                }
            });
            
            // Scroll to previous section if exists
            if (currentIndex > 0) {
                sections[currentIndex - 1].scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
