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
// let navBarClicke = function scrollHeightly(width, height) {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
// }
window.addEventListener('scroll', function () {
    if (window.innerWidth < 480) {
        if (scrollY < 812) {
            sections.classList.remove('clicked');
            lastNews.classList.remove('clicked');
            contact.classList.remove('clicked');
            home.classList.add('clicked');
        } else if (scrollY < 1624) {
            home.classList.remove('clicked');
            lastNews.classList.remove('clicked');
            contact.classList.remove('clicked');
            sections.classList.add('clicked');
        } else if (scrollY < 2436) {
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
function lightMood() {
    window.localStorage.setItem('mood', 'light');
    dark.classList.remove('clicked');
    light.classList.add('clicked');
    body.classList.remove('dark');
    navContainer.classList.remove('dark');
    mainContainer.classList.remove('dark');
    body.classList.add('light');
    navContainer.classList.add('light');
    mainContainer.classList.add('light');
};
function darkMood() {
    window.localStorage.setItem('mood', 'dark');
    light.classList.remove('clicked');
    dark.classList.add('clicked');
    body.classList.remove('light');
    navContainer.classList.remove('light');
    mainContainer.classList.remove('light');
    body.classList.add('dark');
    navContainer.classList.add('dark');
    mainContainer.classList.add('dark');
};
if (window.localStorage.hasOwnProperty('mood')) {
    if (localStorage.valueOf('mood').mood !== 'dark') {
        lightMood();
    } else {
        darkMood();
    }
} else {
    lightMood();
}
light.onclick = function () {
    lightMood();
};
dark.onclick = function () {
    darkMood();
}
let sectionsItems = document.querySelectorAll('.section');
let date = new Date()
let timeNow = document.querySelector('.dateTime .time')
let dateNow = document.querySelector('.dateTime .date')
dateNow.innerHTML = (String(date.getDate()) + '/' + String(date.getMonth()) + '/' + String(date.getFullYear()));
let hourNow = 0;
let amPm = '';
if (date.getHours() !== 0) {
    if (date.getHours() > 12) {
        hourNow = date.getHours() - 12;
        amPm = 'pm'
    } else {
        hourNow = date.getHours();
        amPm = 'am'
    }
} else {
    hourNow = 12;
    amPm = 'am'
}
let mintNow = '0';
if (date.getMinutes() < 10) {
    mintNow += String(date.getMinutes())
} else {
    mintNow = String(date.getMinutes())
}
timeNow.innerHTML = `${String(hourNow)}:${String(mintNow)} ${amPm}`;
window.setInterval(function () {
    window.location.reload();
}, 60000);
document.querySelector('.sectionContainer').style['grid-template-rows'] = `repeat(${Math.ceil(sectionsItems.length / 3)}, 375px)`