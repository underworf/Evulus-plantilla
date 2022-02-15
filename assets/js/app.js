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

/* ---------------------- Splide --------------------- */
// const slider = document.querySelector('.slider-content')
// const itemSlider = document.querySelectorAll('.item-slider')
// let count = 1;
// let itemWidth = $('#width-item-slide').width()

// setInterval(function() {
//     initSlides()
// }, 2000)

// function initSlides() {
//     slider.style.transform = "translate(" + (-itemWidth * count) + "px)"
//     slider.style.transition = "all .7s"
//     count++

//     if (count == itemSlider.length) {
//         setTimeout(function() {
//             slider.style.transform = "translate(0px)"
//             slider.style.transition = " all 0s"
//             count = 1
//         }, 1000)
//     }
// }


/* ------------------------ MENU ------------------------ */

$('.close').click(function() {
    $('.submenu').removeClass('active')
})

$('.menu-burguer').click(function() {
    $('.submenu').addClass('active')

})

$(document).ready(function() {
    var resolucion = $(window).resize(function() {
        $(window).height()
    })
    if (resolucion < 1024) {

    }
    console.log(resolucion);



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


if (windowSize < 992) {
    responsive()
}
window.addEventListener('resize', () => {
    responsive()
})