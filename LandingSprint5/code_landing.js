document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form');
    const close = document.getElementById('close');
    const modal_container = document.getElementById('modal_container2');
    const suButton = document.querySelector('.button')



      // Abrir la ventana modal
      suButton.addEventListener('click', function (event) {
       event.preventDefault();
      modal_container.classList.add('show');
    });

    close.addEventListener('click', function() {
      // Cerrar la ventana modal
      modal_container.classList.remove('show');
    });



    /* Mostrar el formulario */
    let isFormVisible = false;
    var formm = document.querySelector('form');

    var botonMostrar = document.getElementById('mostrar');
    var formulario = document.getElementById('form');

    function alternarFormulario() {
      if (formulario.style.display === 'none' || formulario.style.display === '') {
        formulario.style.display = 'block'; // Muestra el formulario si está oculto
      } else {
        formulario.style.display = 'none'; // Oculta el formulario si está visible
      }
    }

    botonMostrar.addEventListener('click', function() {
      alternarFormulario();
    });


    plusButton.addEventListener('click', function(){

        if(isFormVisible){
            form.style.display = 'none';

        }else{
            form.style.display = 'block';
        }
        isFormVisible = !isFormVisible;
    });
});



