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

/* ----------------------- SLIDER ----------------------- */

$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: [

        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>",
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        350: {
            items: 2
        },
        500: {
            items: 3
        },
        700: {
            items: 4
        },
        1000: {
            items: 5
        },
        1200: {
            items: 7
        }
    }
})

// $('.owl-carousel').owlCarousel({
//     nav: true,
//     margin: 10,
//     loop: true,
//     autoWidth: true,
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         992: {
//             items: 5
//         },
//         1000: {
//             items: 8,
//             nav: true,

//         }
//     }
// })




// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 4,
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true
// });