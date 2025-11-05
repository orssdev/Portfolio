/* ===================================
 * NAVIGATION MODULE
 * Handles header navigation and hamburger menu
 * =================================== */

export function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('header nav');
    const links = document.querySelectorAll('header nav a');
    const body = document.body;

    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMenu);

    // Keyboard accessibility for hamburger
    hamburger.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close menu when clicking links
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1100) {
            closeMenu();
        }
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    function toggleMenu() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        body.style.overflow = 'auto';
    }
}
