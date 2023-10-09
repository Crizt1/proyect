const hamburguer = document.querySelector(".hamburguer")
const menu = document.querySelector(".menu-navegacion")
console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
  menu.classList.toggle("spread")
})

window.addEventListener('click', e => {

  if(menu.classList.contains('spread')
      && e.target!=menu && e.target !=hamburguer    ){

      menu.classList.toggle("spread")


  }
})
//cerrar y abrir ventanas modales jQuery
$(function (){
  $("img").click(function(){
    var modalId = $(this).data('target');
    $(modalId).addClass("modal--show");
  });

  $(".modal_close").click(function(){
    var modalId = $(this).attr('id');
    $("#"+modalId).removeClass("modal--show");
    
  });
});

/*const openModal = document.querySelector(".img");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.remove('modal--show');
});
*/