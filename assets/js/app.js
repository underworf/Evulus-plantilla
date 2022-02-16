const buttonCopy = document.querySelector('.copy')
const inputPin = document.querySelector('.clipboard')

buttonCopy.addEventListener('click', () => {
    inputPin.focus();
    document.execCommand('selectAll')
    document.execCommand('copy')
})

/* ------------------------- LUPA AND MENU------------------------ */
const textSeach = document.querySelector('.button-search input')
const buttonSeach = document.querySelector('.button-search button')

textSeach.addEventListener('click', () => {
    buttonSeach.classList.add('active')
})



$('main').on('click', function() {
    $('.submenu').removeClass('active')
    buttonSeach.classList.remove('active')

})



/* ------------------------ MENU ------------------------ */

$('.close').click(function() {
    $('.submenu').removeClass('active')
})

$('.menu-burguer').click(function() {
    $('.submenu').addClass('active')

})


var windowSize = $(window).width();


function responsive() {
    var windowSize = $(window).width()
    console.log(windowSize);





    if (windowSize < 1200) {
        const itemNav = document.createDocumentFragment();
        itemNav.appendChild(document.querySelector('.logginSearch'));
        document.getElementById('aside-menu').appendChild(itemNav);
    } else {
        const itemNav = document.createDocumentFragment();
        itemNav.appendChild(document.querySelector('.logginSearch'));
        document.getElementById('nav-modificacion__menu').appendChild(itemNav);
    }


    if (windowSize < 768) {
        const itemNavLeft = document.createDocumentFragment();
        itemNavLeft.appendChild(document.querySelector('.nav_principal'));
        document.getElementById('aside-menu').appendChild(itemNavLeft);

        const itemNav = document.createDocumentFragment();
        itemNav.appendChild(document.querySelector('.nav-items-static'));
        document.getElementById('aside-menu').appendChild(itemNav);
    } else {
        const itemNavLeft = document.createDocumentFragment();
        itemNavLeft.appendChild(document.querySelector('.nav_principal'));
        document.getElementById('navbar-evulus').appendChild(itemNavLeft);
        const itemNav = document.createDocumentFragment();
        itemNav.appendChild(document.querySelector('.nav-items-static'));
        document.getElementById('nav-modificacion__menu').appendChild(itemNav);

    }
}



if (windowSize < 1200) {
    responsive()
}
window.addEventListener('resize', () => {
    responsive()
})