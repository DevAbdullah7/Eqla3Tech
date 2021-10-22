// Add hoverd class to website sections
let home = document.querySelector('.home');
let sections = document.querySelector('.sections');
let lastNews = document.querySelector('.lastNews');
let light = document.querySelector('.light');
let dark = document.querySelector('.dark');
let menuMobile = document.querySelector('.menuMobile');
let navContainer = document.querySelector('.navContainer');
let mainContainer = document.querySelector('.mainContainer');
let topBar = document.querySelector('.topBar');
home.onclick = function () {
    sections.classList.remove('clicked');
    lastNews.classList.remove('clicked');
    home.classList.add('clicked')
};
sections.onclick = function () {
    home.classList.remove('clicked');
    lastNews.classList.remove('clicked');
    sections.classList.add('clicked')
};
lastNews.onclick = function () {
    home.classList.remove('clicked');
    sections.classList.remove('clicked');
    lastNews.classList.add('clicked')
}
light.onclick = function () {
    dark.classList.remove('clicked');
    light.classList.add('clicked')
}
dark.onclick = function () {
    light.classList.remove('clicked');
    dark.classList.add('clicked')
}
menuMobile.onclick = function () {
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
}