const navLink = document.querySelector(" .nav-link")
const openMenuButton = document.querySelector("#menu-open-button")
const closeMenuButton = document.querySelector("#menu-close-button")


openMenuButton.addEventListener("click", () => document.body.classList.toggle("show-mobile-menu"))
closeMenuButton.addEventListener("click" ,() => document.body.classList.remove("show-mobile-menu"))



 navLink.addEventListener("click", () => openMenuButton.click())


const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        preEl: '.swiper-button-prev'
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});

