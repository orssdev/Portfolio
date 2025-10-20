const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('header nav')
const links = document.querySelectorAll('header nav a')
const social_links = document.querySelectorAll('.red-icon')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    sidebar.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        sidebar.classList.remove('active')
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
        sidebar.classList.remove('active')
        hamburger.classList.remove('active')
    }
})

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