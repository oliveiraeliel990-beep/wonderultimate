// Wonder Ultimate - Script básico
// Arquivo preparado para expansão futura
// Compatível com Google AdSense

document.addEventListener("DOMContentLoaded", function () {
  console.log("Wonder Ultimate carregado com sucesso");

});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-lateral");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
