document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');

    mobileMenuIcon.addEventListener('click', function () {
        menu.classList.toggle('mobile-menu-icon');
    })
})

// scroll
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        let scrollOffset = 0;
        if (sectionId === '#projects') {
            scrollOffset = section.offsetTop - 70;

        } else {
            scrollOffset = section.offsetTop - (window.innerHeight - section.clientHeight) / 2;
        }
        window.scrollTo({
            top: scrollOffset,
            behavior: 'smooth'
        });
    }
}
document.addEventListener('DOMContentLoaded', function(){
    const links = document.querySelectorAll('nav a');
    links.forEach(function (link){
        links.addEventListener('click', function(e){
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            scrollToSection(sectionId);
        });
    });
});
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach(function (link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        scrollToSection(sectionId);
    })
})
// secao de contato