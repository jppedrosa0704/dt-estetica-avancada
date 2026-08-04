/* ============================
  MENU MOBILE
============================ */
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

/* ============================
  CATEGORIAS (Tratamentos)
============================ */
const categoriaToggles = document.querySelectorAll('.categoria-toggle');

categoriaToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.parentElement.nextElementSibling;
    const aberta = content.classList.contains('aberta');

    content.classList.toggle('aberta');
    btn.textContent = aberta ? 'Ver serviços' : 'Fechar';
    btn.dataset.aberto = aberta ? "false" : "true";
  });
});

/* ============================
  CARDS (Tratamentos)
============================ */
const cardToggles = document.querySelectorAll('.card-toggle');

cardToggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.parentElement.nextElementSibling;
    const isOpen = content.style.display === 'block';

    content.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? 'Abrir' : 'Fechar';
  });
});

/* ============================
  BOLINHAS DO SLIDER (Sobre)
============================ */
const fotos = document.querySelector('.sobre-fotos');
const indicadores = document.querySelectorAll('.indicador');

if (fotos && indicadores.length > 0) {
  fotos.addEventListener('scroll', () => {
    const largura = fotos.clientWidth;
    const index = Math.round(fotos.scrollLeft / largura);

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
  if (!hash) return;

  const alvo = document.querySelector(hash);
  if (!alvo) return;

  const navHeight = window.innerWidth < 899 ? 65 : 85;
  const posicao = alvo.offsetTop - navHeight;

  window.scrollTo({
    top: posicao,
    behavior: 'smooth'
  });
});

/* ============================
  ABRIR AUTOMATICAMENTE A CATEGORIA PELO HASH (#)
============================ */
window.addEventListener('load', () => {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const categoriaTitulo = document.querySelector(`h3[id="${hash}"]`);
  if (!categoriaTitulo) return;

  const categoria = categoriaTitulo.closest(".categoria");
  const content = categoria.querySelector(".categoria-content");
  const btn = categoria.querySelector(".categoria-toggle");

  content.classList.add("aberta");
  btn.textContent = "Fechar";
  btn.dataset.aberto = "true";
});

/* ============================================================
   BOLINHAS DA GALERIA MOBILE
============================================================ */
const galeria = document.querySelector('.mobile-gallery');
const galeriaDots = document.querySelector('.galeria-indicadores');

if (galeria && galeriaDots) {

    const fotosMobile = galeria.querySelectorAll('.gallery-item').length;

    galeriaDots.innerHTML = "";

    for (let i = 0; i < fotosMobile; i++) {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("ativo");
        galeriaDots.appendChild(dot);
    }

    const dots = galeriaDots.querySelectorAll("span");

    galeria.addEventListener('scroll', () => {
        const largura = galeria.clientWidth;
        const index = Math.round(galeria.scrollLeft / largura);

        dots.forEach((d, i) => {
            d.classList.toggle('ativo', i === index);
        });
    });
}

/* ============================
  BOLINHAS DO SLIDER (Categorias Home)
============================ */
const categoriasCarousel = document.querySelector('.tratamentos-home-grid');
const indicadoresTrat = document.querySelectorAll('.indicador-trat');

if (categoriasCarousel && indicadoresTrat.length > 0) {

  categoriasCarousel.addEventListener('scroll', () => {
    const largura = categoriasCarousel.clientWidth;
    const index = Math.round(categoriasCarousel.scrollLeft / largura);

    indicadoresTrat.forEach((bolinha, i) => {
      bolinha.classList.toggle('ativo', i === index);
    });
  });

  indicadoresTrat.forEach((bolinha, i) => {
    bolinha.addEventListener('click', () => {
      const largura = categoriasCarousel.clientWidth;
      categoriasCarousel.scrollTo({
        left: largura * i,
        behavior: 'smooth'
      });
    });
  });
}

/* ============================
  BOTÃO AGENDAR DOS CARDS SUB-CATEGORIA
============================ */
document.querySelectorAll('.btn-agendar').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'index.html#contato';
  });
});

/* ANIMAÇÃO FADE-IN AO ROLAR */
const fadeElements = document.querySelectorAll('.fade-in, .slide-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
