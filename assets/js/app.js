/* ------------------------ MENU ------------------------ */

$('.close').click(function() {
    $('.submenu').removeClass('active')
    $('.aside-menu').removeClass('active')
})

$('.menu-burguer').click(function() {
    $('.submenu').addClass('active')
    $('.aside-menu').addClass('active')

})


var windowSize = $(window).width();


function responsive() {
    var windowSize = $(window).width()
    console.log(windowSize);

    if (windowSize <= 1200) {
        const itemNav = document.createDocumentFragment();
        itemNav.appendChild(document.querySelector('.logginSearch'));
        document.getElementById('items-submenu').appendChild(itemNav);
    } else {
        const itemNav = document.createDocumentFragment();
        itemNav.appendChild(document.querySelector('.logginSearch'));
        document.getElementById('nav-modificacion__menu').appendChild(itemNav);
    }


    if (windowSize <= 767) {
        const itemNavLeft = document.createDocumentFragment();
        itemNavLeft.appendChild(document.querySelector('.nav_principal'));
        document.getElementById('items-submenu').appendChild(itemNavLeft);

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



if (windowSize <= 1200) {
    responsive()
}
window.addEventListener('resize', () => {
    responsive()
})

/* --------------------- COPY BUTTON -------------------- */


const buttonCopy = document.querySelector('.copy')

buttonCopy.addEventListener('click', () => {
    const inputPin = document.querySelector('.clipboard')

    var inputFalso = document.createElement('input')
    inputFalso.setAttribute("value", inputPin.innerHTML)
    document.body.appendChild(inputFalso)
    inputFalso.select()
    document.execCommand('copy')
    document.body.removeChild(inputFalso)

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



/* ----------------------- SLIDER ----------------------- */
$('#owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        700: {
            items: 3
        },
        800: {
            items: 4,
        },
        1000: {
            items: 5,
        },
        1200: {
            items: 6
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,

    nav: true,
    navText: [

        "<i class='far fa-angle-left'></i>",
        "<i class='far fa-angle-right'></i>",
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4,
        },
        1000: {
            items: 5,
        },
        1200: {
            items: 7
        }
    }
})