// Navbar
// Add hoverd class to website sections
let home = document.querySelector('.home');
let sections = document.querySelector('.sections');
let lastNews = document.querySelector('.lastNews');
let contact = document.querySelector('.contact');
let light = document.querySelector('#light');
let dark = document.querySelector('#dark');
let menuMobile = document.querySelector('.menuMobile');
let navMobileMenu = document.querySelector('.navMobileMenu');
let body = document.querySelector('.body');
let navContainer = document.querySelector('.navContainer');
let mainContainer = document.querySelector('.mainContainer');
let topBar = document.querySelector('.topBar');
home.onclick = function putHomeClicked() {
    if (window.innerWidth < 480) {
        sections.classList.remove('clicked');
        lastNews.classList.remove('clicked');
        contact.classList.remove('clicked');
        home.classList.add('clicked');
    }
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
sections.onclick = function putSectionsClicked() {
    if (window.innerWidth < 480) {
        home.classList.remove('clicked');
        lastNews.classList.remove('clicked');
        contact.classList.remove('clicked');
        sections.classList.add('clicked');
    }
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
lastNews.onclick = function () {
    if (window.innerWidth < 480) {
        home.classList.remove('clicked');
        sections.classList.remove('clicked');
        contact.classList.remove('clicked');
        lastNews.classList.add('clicked');
    }
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
contact.onclick = function () {
    if (window.innerWidth < 480) {
        home.classList.remove('clicked');
        sections.classList.remove('clicked');
        lastNews.classList.remove('clicked');
        contact.classList.add('clicked');
    }
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
};
menuMobile.onclick = function () {
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
}
navMobileMenu.onclick = function () {
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
}
window.addEventListener('scroll', function () {
    if (window.innerWidth > 480) {
        if (scrollY < 900) {
            sections.classList.remove('clicked');
            lastNews.classList.remove('clicked');
            contact.classList.remove('clicked');
            home.classList.add('clicked');
        } else if (scrollY < 1900) {
            home.classList.remove('clicked');
            lastNews.classList.remove('clicked');
            contact.classList.remove('clicked');
            sections.classList.add('clicked');
        } else if (scrollY < 3000) {
            home.classList.remove('clicked');
            sections.classList.remove('clicked');
            contact.classList.remove('clicked');
            lastNews.classList.add('clicked');
        } else {
            home.classList.remove('clicked');
            sections.classList.remove('clicked');
            lastNews.classList.remove('clicked');
            contact.classList.add('clicked');
        }
    }
})

// Dark Mood
light.onclick = function () {
    dark.classList.remove('clicked');
    light.classList.add('clicked');
    body.classList.remove('dark');
    navContainer.classList.remove('dark');
    mainContainer.classList.remove('dark');
    body.classList.add('light');
    navContainer.classList.add('light');
    mainContainer.classList.add('light');
};
dark.onclick = function () {
    light.classList.remove('clicked');
    dark.classList.add('clicked');
    body.classList.remove('light');
    navContainer.classList.remove('light');
    mainContainer.classList.remove('light');
    body.classList.add('dark');
    navContainer.classList.add('dark');
    mainContainer.classList.add('dark');
};