        // JavaScript for hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
    
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    
        // Close the mobile menu when clicking outside of it
        document.addEventListener('click', function(event) {
            const isClickInside = hamburger.contains(event.target) || mobileMenu.contains(event.target);
    
            if (!isClickInside) {
                mobileMenu.classList.remove('active');
            }
        });
