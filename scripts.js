const sections = document.querySelectorAll('header nav a');

sections.forEach(section => {
    link.addEventListener('click', e => {
        e.preventDefault();
    });
});
