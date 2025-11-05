const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('header nav')
const links = document.querySelectorAll('header nav a')
const social_links = document.querySelectorAll('.red-icon')

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    sidebar.classList.toggle('active')
})

// Keyboard accessibility for hamburger
hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        hamburger.classList.toggle('active')
        sidebar.classList.toggle('active')
    }
})

// Close menu when clicking links
links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        sidebar.classList.remove('active')
    })
})

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
        sidebar.classList.remove('active')
        hamburger.classList.remove('active')
    }
})

// Social links
social_links.forEach(link => {
    link.addEventListener('click', () => {
        switch (link.id) {
            case 'github':
                window.open('https://github.com/orssdev', '_blank')
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/orssdev', '_blank')
                break;
            default:
                console.log('No link set for:', link.id)
        }
    })
})

// Add hover effect for social links
social_links.forEach(link => {
    link.style.transition = 'transform 0.3s ease, filter 0.3s ease'
    
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1) rotate(5deg)'
    })
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) rotate(0deg)'
    })
})

// Add active section highlighting in navigation
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav a')

window.addEventListener('scroll', () => {
    let current = ''
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id')
        }
    })
    
    navLinks.forEach(link => {
        link.classList.remove('active-link')
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link')
        }
    })
})

// Prevent body scroll when menu is open
const body = document.body
hamburger.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
})

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active')
        sidebar.classList.remove('active')
        body.style.overflow = 'auto'
    }
})

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top')

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible')
    } else {
        scrollTopBtn.classList.remove('visible')
    }
})

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// Keyboard accessibility for scroll-to-top
scrollTopBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
})

// Lazy loading for images (performance optimization)
const images = document.querySelectorAll('img')
const imageOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
}

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target
            img.style.opacity = '0'
            img.style.transition = 'opacity 0.5s ease'
            setTimeout(() => {
                img.style.opacity = '1'
            }, 100)
            observer.unobserve(img)
        }
    })
}, imageOptions)

images.forEach(image => {
    imageObserver.observe(image)
})