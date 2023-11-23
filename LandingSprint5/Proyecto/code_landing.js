document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#form');
  const close = document.getElementById('close');
  const modal_container = document.getElementById('modal_container2');
  const suButton = document.querySelector('.button');
  const plusButton = document.getElementById('plusButton'); // Agrega esta línea

  

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

  // Evento para mostrar u ocultar el formulario
  plusButton.addEventListener('click', function() {
    if (isFormVisible) {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
    isFormVisible = !isFormVisible;
  });

  // Evento submit del formulario
  document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    const response = await fetch('/guardar-datos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    alert(result.message);
  });

  function abrirWhatsApap() {
    var nombre = document.getElementById('nombre').value;
    var celular = document.getElementById('celular').value;
    var correo = document.getElementById('correo').value;

    var mensaje = "Nombre: " + nombre + "\nCelular: " + celular + "\nCorreo: " + correo;
    alert(mensaje);

    var urlWhatsapp = "https://api.whatsapp.com/send?phone=573219853734&text=" + mensaje;
    window.open(urlWhatsapp);
  }
});
