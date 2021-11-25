// Responsive Height ^_^
document.querySelector('.navContent').style['height'] = `${window.innerHeight}px`
document.querySelector('.mainContainer').style['min-height'] = `${window.innerHeight}px`
if (document.querySelector('.homePage')) {
    document.querySelector('.homePage').style['min-height'] = `${(window.innerHeight)}px`
    document.querySelector('.homeContent').style['height'] = `${(window.innerHeight - 75)}px`
}
if (document.querySelector('.sectionsPage')) {
    document.querySelector('.sectionsPage').style['min-height'] = `${window.innerHeight}px`
    if (document.querySelector('.sectionsContent')) {
        document.querySelector('.sectionsContent').style['min-height'] = `${(window.innerHeight - 75)}px`
    }
}
if (document.querySelector('.subjectsContainer')) {
    document.querySelector('.subjectsContainer').style['height'] = `${Math.ceil((window.innerHeight * 92.15) / 100)}px`
}
if (document.querySelector('.lastNewsPage')) {
    document.querySelector('.lastNewsPage').style['min-height'] = `${window.innerHeight}px`
    document.querySelector('.lastNewsContent').style['height'] = `${window.innerHeight}px`
}
if (document.querySelector('.contactPage')) {
    document.querySelector('.contactPage').style['min-height'] = `${window.innerHeight}px`
    document.querySelector('.contactPageInfo').style['height'] = `${((window.innerHeight - 75) * 7.5) / 100}px`
    document.querySelector('.contactContainer').style['height'] = `${((window.innerHeight - 75) * 75.5) / 100}px`
    document.querySelector('.footer').style['height'] = `${((window.innerHeight - 75) * 17) / 100}px`
}
// Add hoverd class to website sections
let home = document.querySelector('.home');
let html = document.querySelector('.html');
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
    if (window.innerWidth < 480) {
        document.querySelector('.html').style['overflow-y'] = 'visible'
    }
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
    if (window.innerWidth < 480) {
        document.querySelector('.html').style['overflow-y'] = 'visible'
    }
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
    if (window.innerWidth < 480) {
        document.querySelector('.html').style['overflow-y'] = 'visible'
    }
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
    if (window.innerWidth < 480) {
        document.querySelector('.html').style['overflow-y'] = 'visible'
    }
};
menuMobile.onclick = function () {
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
    document.querySelector('.html').style['overflow-y'] = 'hidden'
    document.querySelector('.navContent').style['height'] = `${window.innerHeight}px`
}
navMobileMenu.onclick = function () {
    menuMobile.classList.toggle('activate');
    navContainer.classList.toggle('activate');
    mainContainer.classList.toggle('activate');
    topBar.classList.toggle('activate')
    document.querySelector('.html').style['overflow-y'] = 'visible'
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
        } else if (scrollY < 2500) {
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
    html.classList.remove('dark');
    body.classList.remove('dark');
    navContainer.classList.remove('dark');
    mainContainer.classList.remove('dark');
    html.classList.add('light');
    body.classList.add('light');
    navContainer.classList.add('light');
    mainContainer.classList.add('light');
};
function darkMood() {
    window.localStorage.setItem('mood', 'dark');
    light.classList.remove('clicked');
    dark.classList.add('clicked');
    body.classList.remove('light');
    html.classList.remove('light');
    navContainer.classList.remove('light');
    mainContainer.classList.remove('light');
    html.classList.add('dark');
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
let sectionsItems = document.querySelectorAll('.sectionsContainer .section');
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
// window.setInterval(function () {
//     window.location.reload();
// }, 60000);

let lastNewsPrev = document.getElementById('lastNewsPrev')
let lastNewsNext = document.getElementById('lastNewsNext')
let lastNewsSections = document.querySelectorAll('.lastNewsSecContent')
let lastNewsIcons = document.querySelectorAll('.lastNewsSecIcons i')
let lastNewsCounter;
if (window.localStorage.hasOwnProperty('lastNewsCounter')) {
    lastNewsCounter = Number(window.localStorage.lastNewsCounter)
} else {
    lastNewsCounter = 0
}
lastNewsSections.forEach(function (item, ind) {
    if (ind === lastNewsCounter) {
        item.classList.add('activate')
    }
})
lastNewsIcons.forEach(function (item, ind) {
    if (ind === lastNewsCounter) {
        item.classList.add('activate')
    }
})
lastNewsPrev.onclick = function () {
    if (lastNewsCounter !== 0) {
        lastNewsCounter -= 1;
    } else {
        lastNewsCounter = 5;
    }
    lastNewsSections.forEach(function (item) {
        item.classList.remove('activate')
    })
    lastNewsIcons.forEach(function (item) {
        item.classList.remove('activate')
    })
    lastNewsSections[lastNewsCounter].classList.add('activate');
    lastNewsIcons[lastNewsCounter].classList.add('activate');
    window.localStorage.setItem('lastNewsCounter', String(lastNewsCounter))
}
lastNewsNext.onclick = function () {
    if (lastNewsCounter !== 5) {
        lastNewsCounter += 1;
    } else {
        lastNewsCounter = 0;
    }
    lastNewsSections.forEach(function (item) {
        item.classList.remove('activate')
    })
    lastNewsIcons.forEach(function (item) {
        item.classList.remove('activate')
    })
    lastNewsSections[lastNewsCounter].classList.add('activate');
    lastNewsIcons[lastNewsCounter].classList.add('activate');
    window.localStorage.setItem('lastNewsCounter', String(lastNewsCounter))
}
lastNewsIcons.forEach(function (icon, index) {
    icon.onclick = function () {
        lastNewsSections.forEach(function (item, ind) {
            item.classList.remove('activate')
            if (index === ind) {
                item.classList.add('activate')
                lastNewsCounter = index
                window.localStorage.setItem('lastNewsCounter', String(lastNewsCounter))
            }
        })
        lastNewsIcons.forEach(function (item, ind) {
            item.classList.remove('activate')
            if (index === ind) {
                item.classList.add('activate')
            }
        })
    }
})
function lastNewsSlide() {
    lastNewsSections.forEach(function (item) {
        item.classList.remove('activate')
    });
    lastNewsIcons.forEach(function (item) {
        item.classList.remove('activate')
    });
    if (lastNewsCounter === 5) {
        lastNewsCounter = 0
    } else {
        lastNewsCounter += 1;
    }
    lastNewsSections[lastNewsCounter].classList.add('activate')
    lastNewsIcons[lastNewsCounter].classList.add('activate')
    window.localStorage.setItem('lastNewsCounter', String(lastNewsCounter))
}
let slide = window.setInterval(lastNewsSlide, 10000)
document.querySelector('.lastNewsSection').onmouseover = function () {
    clearInterval(slide)
}
document.querySelector('.lastNewsSection').onmouseleave = function () {
    slide = window.setInterval(lastNewsSlide, 10000)
}
if (window.innerWidth < 481) {
    document.querySelector('.sectionsContainer').style['grid-template-rows'] = `repeat(${Math.ceil(sectionsItems.length / 3) + 2}, 225px)`
} else if (window.innerWidth < 769) {
    document.querySelector('.sectionsContainer').style['grid-template-rows'] = `repeat(${Math.ceil(sectionsItems.length / 3) + 1}, 240px)`
} else {
    document.querySelector('.sectionsContainer').style['grid-template-rows'] = `repeat(${Math.ceil(sectionsItems.length / 3)}, 325px)`
}