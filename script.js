// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// BOLINHAS DO SOBRE
const fotos = document.querySelector('.sobre-fotos');
const indicadores = document.querySelectorAll('.indicador');

fotos.addEventListener('scroll', () => {
  const largura = fotos.clientWidth;
  const scroll = fotos.scrollLeft;

  const index = Math.round(scroll / largura);

  indicadores.forEach((bolinha, i) => {
    bolinha.classList.toggle('ativo', i === index);
  });
});