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
    } else {
      content.classList.add('aberta');
      btn.textContent = 'Fechar';
    }
  });
});

// CARDS (Tratamentos) — AGORA COM "VER MAIS" ↔ "FECHAR"
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
