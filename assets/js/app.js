/* ------------------------ MENU ------------------------ */

$('.close').click(function() {
    $('.submenu').removeClass('active')
    $('.aside-menu').removeClass('active')
})

$('.menu-burguer').click(function() {
    $('.submenu').addClass('active')
    $('.aside-menu').addClass('active')
})
$('.submenu').click(function() {
    $('.submenu').removeClass('active')
    $('.aside-menu').removeClass('active')
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


/* --------------------- BUTTON TOP --------------------- */
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        $('.go-top').addClass('active')
    } else {
        $('.go-top').removeClass('active')
    }
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


/* ------------------ NUMBERS-ANIMATION ----------------- */

const contadores = $('.contador')
const velocidad = 500

const animacionContadores = () => {
    for (const contador of contadores) {
        const actualizar_contador = () => {
            let cantidad_maxima = +contador.dataset.cantidad
            let valor_actual = +contador.innerText
            let incremento = cantidad_maxima / velocidad


            if (valor_actual < cantidad_maxima) {
                contador.innerText = Math.ceil(valor_actual + incremento)
                setTimeout(actualizar_contador, 30)
            } else {
                contador.innerText = cantidad_maxima
            }
        }
        actualizar_contador()
    }
}


/* ---------------- INTERSECTIONOBSERVER ---------------- */

const iniciarConteo = elementos => {
    elementos.forEach(elemento => {
        if (elemento.isIntersecting) {

            let container = document.querySelectorAll('.contador-container')
            container.forEach(item => {
                item.classList.add('animation-number')
                item.classList.remove("show-number")
            })
            setTimeout(animacionContadores, 300)
        }
    })
}

const observador = new IntersectionObserver(iniciarConteo, {
    threshold: 0.75
})

const elementosHTML = document.querySelectorAll('.contador')
elementosHTML.forEach(containerContador => {
    observador.observe(containerContador)
})