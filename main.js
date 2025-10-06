const iconeMenu = document.querySelector('.icone-menu');
const menuAtivo = document.querySelector('.menu-mobile');

iconeMenu.addEventListener('click', () => {
  menuAtivo.classList.toggle('menu-ativo');
});


