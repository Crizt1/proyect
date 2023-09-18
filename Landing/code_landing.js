document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form');
    const close = document.getElementById('close');
    const modal_container = document.getElementById('modal_container2');
    const suButton = document.querySelector('.button')


    /* Mostrar la ventana Modal */
    suButton.addEventListener('click', function (event) {
        event.preventDefault();
        modal_container.classList.add('show');
    });

    close.addEventListener('click', function(){
        modal_container.classList.remove('show');
    });


    /* Mostrar el formulario */
    let isFormVisible = false;
    const plusButton = document.querySelector('.mostrar');

    plusButton.addEventListener('click', function(){

        if(isFormVisible){
            form.style.display = 'none';
        }else{
            form.style.display = 'block';
        }
        isFormVisible = !isFormVisible;
    });
});




