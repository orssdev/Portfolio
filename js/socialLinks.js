/* ===================================
 * SOCIAL LINKS MODULE
 * Handles social media icon interactions
 * =================================== */

export function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.red-icon');

    socialLinks.forEach(link => {
        // Click handler
        link.addEventListener('click', handleSocialClick);

        // Hover effects
        link.style.transition = 'transform 0.3s ease, filter 0.3s ease';
        
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    function handleSocialClick() {
        const socialId = this.id;
        const urls = {
            github: 'https://github.com/orssdev',
            linkedin: 'https://www.linkedin.com/in/orssdev',
            resume: 'https://portfolio.orss.dev/assets/Resume.pdf'
        };

        if (urls[socialId]) {
            window.open(urls[socialId], '_blank');
        } else {
            console.log('No link set for:', socialId);
        }
    }
}
