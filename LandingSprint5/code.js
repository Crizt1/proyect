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

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



