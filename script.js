// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const menuMobile = document.querySelector('.menu-mobile');
const mobileLinks = document.querySelectorAll('.menu-mobile a');

if (toggle && menuMobile) {
  toggle.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('open');
    });
  });
}

// CATEGORIAS (Tratamentos)
const categoriaToggles = document.querySelectorAll('.categoria-toggle');

categoriaToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.parentElement.nextElementSibling;
    const aberta = content.classList.contains('aberta');

    if (aberta) {
      content.classList.remove('aberta');
      btn.textContent = 'Ver serviços';
      btn.dataset.aberto = "false";
    } else {
      content.classList.add('aberta');
      btn.textContent = 'Fechar';
      btn.dataset.aberto = "true";
    }
  });
});

// CARDS (Tratamentos) — "VER MAIS" ↔ "FECHAR"
const cardToggles = document.querySelectorAll('.card-toggle');

cardToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.parentElement.nextElementSibling;
    const isOpen = content.style.display === 'block';

    if (isOpen) {
      content.style.display = 'none';
      btn.textContent = 'Abrir';
    } else {
      content.style.display = 'block';
      btn.textContent = 'Fechar';
    }
  });
});

// BOLINHAS DO SLIDER (Sobre)
const fotos = document.querySelector('.sobre-fotos');
const indicadores = document.querySelectorAll('.indicador');

if (fotos && indicadores.length > 0) {
  fotos.addEventListener('scroll', () => {
    const largura = fotos.clientWidth;
    const scroll = fotos.scrollLeft;

    const index = Math.round(scroll / largura);

    indicadores.forEach((bolinha, i) => {
      bolinha.classList.toggle('ativo', i === index);
    });
  });
}

/* ============================
  SCROLL SUAVE PARA LINKS
============================ */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const alvo = document.querySelector(this.getAttribute('href'));

    if (!alvo) return;

    const navHeight = window.innerWidth < 899 ? 65 : 85;
    const posicao = alvo.offsetTop - navHeight;

    window.scrollTo({
      top: posicao,
      behavior: 'smooth'
    });
  });
});

/* ============================
  SCROLL SUAVE AO CARREGAR
============================ */

window.addEventListener('load', () => {
    const hash = window.location.hash;

    if (hash) {
        const alvo = document.querySelector(hash);

        if (alvo) {
            const navHeight = window.innerWidth < 899 ? 65 : 85;
            const posicao = alvo.offsetTop - navHeight;

            window.scrollTo({
                top: posicao,
                behavior: 'smooth'
            });
        }
    }
});

/* ============================
  ABRIR AUTOMATICAMENTE A CATEGORIA PELO HASH (#)
============================ */

window.addEventListener('load', () => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
        const categoriaTitulo = document.querySelector(`h3[id="${hash}"]`);

        if (categoriaTitulo) {
            const categoria = categoriaTitulo.closest(".categoria");
            const content = categoria.querySelector(".categoria-content");
            const btn = categoria.querySelector(".categoria-toggle");

            // Abre automaticamente
            content.classList.add("aberta");

            // Atualiza o texto do botão
            btn.textContent = "Fechar";

            // Marca o botão como já aberto
            btn.dataset.aberto = "true";
        }
    }
});

/* ============================
  BOLINHAS DO CARROSSEL (Categorias)
============================ */

const categoriasCarousel = document.querySelector('.tratamentos-home-grid');
const indicadoresTrat = document.querySelectorAll('.indicador-trat');

if (categoriasCarousel && indicadoresTrat.length > 0) {
  categoriasCarousel.addEventListener('scroll', () => {
    const largura = categoriasCarousel.clientWidth;
    const scroll = categoriasCarousel.scrollLeft;

    const index = Math.round(scroll / largura);

    indicadoresTrat.forEach((bolinha, i) => {
      bolinha.classList.toggle('ativo', i === index);
    });
  });
}
