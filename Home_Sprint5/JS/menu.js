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
const select = document.getElementById('select');
const valorDefault = select.value;
//modal boton carrito 1
const openmodals=document.querySelector('.carro');
const modalcar=document.querySelector('.modals');
const closeModal = document.querySelector('.cerrar');

  openmodals.addEventListener('click',(e)=>{

    e.preventDefault();
    modalcar.classList.add('modals--show');
    select.value = valorDefault;
   })


closeModal.addEventListener('click', (e) => {

  e.preventDefault();
  modalcar.classList.remove('modals--show');
})



//modal boton carrito 2


const openmodals1 = document.querySelector('.carro1');
const modalcar1 = document.querySelector('.modals');
const closeModal1 = document.querySelector('.cerrar');

openmodals1.addEventListener('click', (e) => {

  modalcar1.classList.add('modals--show');
  select.value = valorDefault;
})


closeModal1.addEventListener('click', (e) => {

  e.preventDefault();
  modalcar1.classList.remove('modals--show');
})


//modal boton carrito 3
const openmodals2 = document.querySelector('.carro2');
const modalcar2 = document.querySelector('.modals');
const closeModal2 = document.querySelector('.cerrar');

openmodals2.addEventListener('click', (e) => {

  modalcar2.classList.add('modals--show');
  select.value = valorDefault;
})

//modal boton carrito 4
const openmodals3 = document.querySelector('.carro3');
const modalcar3 = document.querySelector('.modals');
const closeModal3 = document.querySelector('.cerrar');

openmodals3.addEventListener('click', (e) => {

  modalcar3.classList.add('modals--show');
  select.value = valorDefault;
})

//modal boton carrito 5
const openmodals4 = document.querySelector('.carro4');
const modalcar4 = document.querySelector('.modals');
const closeModal4 = document.querySelector('.cerrar');

openmodals4.addEventListener('click', (e) => {

  modalcar4.classList.add('modals--show');
  select.value = valorDefault;
})

//modal boton carrito 6
const openmodals5 = document.querySelector('.carro5');
const modalcar5 = document.querySelector('.modals');
const closeModal5 = document.querySelector('.cerrar');

openmodals5.addEventListener('click', (e) => {

  modalcar5.classList.add('modals--show');
  select.value = valorDefault;
})



//Crear elemento de la lista para el carrito

/*const itemCarrito = document.createElement("li");
itemCarrito.innerHTML = `<img src="{imagen}" alt="${nombre}" width="50"> ${nombre} - $${precio}`;

//Agregar el elemento al carrito
document.getElementById("lista-carrito").appendChild(itemCarrito);

}

*/
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