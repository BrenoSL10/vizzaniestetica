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
const galerias = {
    polimento: {
        titulo: "Polimento",
        fotos: [
            "imagens/galaria-polimento-01.jpg",
            "imagens/galeria-polimento-02.jpg",
            "imagens/polimento/polimento-03.jpeg"
        ]
    },

    cristalizacao: {
        titulo: "Cristalização",
        fotos: [
            "imagens/cristalizacao/cristalizacao-01.jpeg",
            "imagens/cristalizacao/cristalizacao-02.jpeg",
            "imagens/cristalizacao/cristalizacao-03.jpeg"
        ]
    },

    lavagem: {
        titulo: "Lavagem detalhada",
        fotos: [
            "imagens/galeria-lavagem-01.jpg",
            "imagens/galeria-lavagem-02.jpg",
            "imagens/galeria-lavagem-03.jpg",
            "imagens/galeria-lavagem-04.jpg",
            "imagens/galeria-lavagem-05.jpg"
        ]
    },

    farois: {
        titulo: "Polimento de faróis",
        fotos: [
        "imagens/polimento-de-farol-01.jpeg"
        
        ]
    },

    higienizacao: {
        titulo: "Higienização interna",
        fotos: [
            "imagens/higienizacao/higienizacao-01.jpeg",
            "imagens/higienizacao/higienizacao-02.jpeg",
            "imagens/higienizacao/higienizacao-03.jpeg"
        ]
    },

    motos: {
        titulo: "Lavagem de motos",
        fotos: [
            "imagens/galeria-moto-01.jpeg",
            "imagens/galeria-moto-02.jpg",
            "imagens/galeria-moto-03.jpg"
        ]
    }
};

let galeriaAtual = [];
let fotoAtual = 0;

const galeriaAberta = document.getElementById("galeriaAberta");
const fotoAmpliada = document.getElementById("fotoAmpliada");
const contadorFotos = document.getElementById("contadorFotos");
const tituloGaleriaAberta = document.getElementById("tituloGaleriaAberta");

function abrirGaleria(servico) {
    const servicoEscolhido = galerias[servico];

    if (!servicoEscolhido || servicoEscolhido.fotos.length === 0) {
        return;
    }

    galeriaAtual = servicoEscolhido.fotos;
    fotoAtual = 0;

    tituloGaleriaAberta.textContent = servicoEscolhido.titulo;

    galeriaAberta.classList.add("ativa");
    document.body.style.overflow = "hidden";

    atualizarFoto();
}

function fecharGaleria() {
    galeriaAberta.classList.remove("ativa");
    document.body.style.overflow = "";
}

function proximaFoto() {
    fotoAtual++;

    if (fotoAtual >= galeriaAtual.length) {
        fotoAtual = 0;
    }

    atualizarFoto();
}

function voltarFoto() {
    fotoAtual--;

    if (fotoAtual < 0) {
        fotoAtual = galeriaAtual.length - 1;
    }

    atualizarFoto();
}

function atualizarFoto() {
    fotoAmpliada.src = galeriaAtual[fotoAtual];

    contadorFotos.textContent =
        `${fotoAtual + 1} de ${galeriaAtual.length}`;
}

galeriaAberta.addEventListener("click", function(evento) {
    if (evento.target === galeriaAberta) {
        fecharGaleria();
    }
});

document.addEventListener("keydown", function(evento) {
    if (!galeriaAberta.classList.contains("ativa")) {
        return;
    }

    if (evento.key === "Escape") {
        fecharGaleria();
    }

    if (evento.key === "ArrowRight") {
        proximaFoto();
    }

    if (evento.key === "ArrowLeft") {
        voltarFoto();
    }
});