document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
            }
        });
    });
    
    // Form Submission Handling
    const contactForm = document.getElementById('grill-cleaning-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                grillType: document.getElementById('grill-type').value,
                message: document.getElementById('message').value
            };
            
            // For demonstration purposes, just show an alert
            alert('Thank you for your request! We will contact you soon.');
            
            // In a real implementation, you would send this data to a server
            // using fetch or another method
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Scroll to top button functionality
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '&uarr;';
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.padding = '10px 15px';
    scrollTopButton.style.backgroundColor = '#e52121';
    scrollTopButton.style.color = 'white';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '50%';
    scrollTopButton.style.fontSize = '1.5rem';
    scrollTopButton.style.cursor = 'pointer';
    scrollTopButton.style.display = 'none';
    scrollTopButton.style.zIndex = '999';
    document.body.appendChild(scrollTopButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});