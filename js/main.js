/* ===================================
 * MAIN APP MODULE
 * Entry point - initializes all modules
 * =================================== */

import { initNavigation } from './navigation.js';
import { initActiveSectionHighlight } from './activeSection.js';
import { initSocialLinks } from './socialLinks.js';
import { initScrollToTop } from './scrollToTop.js';
import { initAnimations } from './animations.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initActiveSectionHighlight();
    initSocialLinks();
    initScrollToTop();
    initAnimations();
    
    console.log('Portfolio initialized successfully! 🚀');
});
