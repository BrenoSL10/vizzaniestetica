console.log("Site iniciado!");

/* =========================
   MENU HAMBÚRGUER
========================= */

const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {
    const iconeMenu = botaoMenu.querySelector("i");
    const linksMenu = document.querySelectorAll(".menu a");

    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");

        const menuAberto = menu.classList.contains("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);

        if (iconeMenu) {
            iconeMenu.classList.toggle("fa-bars", !menuAberto);
            iconeMenu.classList.toggle("fa-xmark", menuAberto);
        }
    });

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");

            if (iconeMenu) {
                iconeMenu.classList.remove("fa-xmark");
                iconeMenu.classList.add("fa-bars");
            }
        });
    });
}


/* =========================
   CARROSSEL DE AUTOMÓVEIS
========================= */


const carrosSwiper = new Swiper(".carros-swiper", {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    navigation: {
        nextEl: ".carros-next",
        prevEl: ".carros-prev"
    },

    pagination: {
        el: ".carros-pagination",
        clickable: true
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        600: {
            slidesPerView: 2
        },

        900: {
            slidesPerView: 3
        }
    }
});

/* =========================
   CARROSSEL DE MOTOS
========================= */

const motosSwiper = new Swiper(".motos-swiper", {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    navigation: {
        nextEl: ".motos-next",
        prevEl: ".motos-prev"
    },

    pagination: {
        el: ".motos-pagination",
        clickable: true
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        700: {
            slidesPerView: 2
        }
    }
});

