/* ===================================
 * ANIMATIONS MODULE
 * Handles scroll-based animations
 * =================================== */

export function initAnimations() {
    initImageLazyLoading();
    initFadeInAnimations();
    initStackIconAnimations();
}

// Lazy loading for images with fade-in effect
function initImageLazyLoading() {
    const images = document.querySelectorAll('img');
    const imageOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(image => {
        imageObserver.observe(image);
    });
}

// Fade-in animation for sections on scroll
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.project-card, #my-skills, #tech-stack-container');
    const fadeOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        fadeObserver.observe(element);
    });
}

// Stagger animation for tech stack icons
function initStackIconAnimations() {
    const stackIcons = document.querySelectorAll('.stack-icon');
    const iconOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icons = Array.from(stackIcons);
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.style.opacity = '1';
                        icon.style.transform = 'scale(1)';
                    }, index * 80);
                });
                iconObserver.disconnect();
            }
        });
    }, iconOptions);

    if (stackIcons.length > 0) {
        stackIcons.forEach(icon => {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0.8)';
            icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        iconObserver.observe(document.getElementById('stack-icons'));
    }
}
