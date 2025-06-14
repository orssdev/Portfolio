const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('header nav');
const links = document.querySelectorAll('header a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 1100px)').matches)
    {
        closeSidebar();
    }
});

if(window.matchMedia('(max-width: 1100px)').matches)
{
    closeSidebar();
}

function closeSidebar() 
{
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sidebar.classList.remove('active');
        });
    });
}