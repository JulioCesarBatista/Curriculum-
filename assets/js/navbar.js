const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMobile = document.querySelector('.filtros.mobile');

menuHamburguer.onclick = () => {
  menuHamburguer.classList.toggle('ativo');
  navMobile.classList.toggle('ativo');
}


// let visivel =  document.querySelectorAll(".filtros.mobile a")



// visivel.onclick = () => {

// }