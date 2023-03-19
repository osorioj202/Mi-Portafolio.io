// Hacer que la navegación se pegue en la parte superior de la pantalla al hacer scroll

window.onscroll = function() {pegarNavegacion()};

var navbar = document.getElementById("navegacion");
var sticky = navbar.offsetTop;

function pegarNavegacion() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}

// Hacer que los elementos del servicio aparezcan con animación al hacer scroll

window.addEventListener('scroll', mostrarElementos);

function mostrarElementos() {
var elementos = document.querySelectorAll('.servicio');

elementos.forEach(function(elemento) {
var posicion = elemento.getBoundingClientRect().top;
var tamañoPantalla = window.innerHeight / 1.3;

if (posicion < tamañoPantalla) {
    elemento.classList.add('aparecer');
  }
});
}

const form = document.querySelector('#my-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // evita el envío del formulario predeterminado

    // recopilar datos del formulario
    const name = form.nombre.value;
    const email = form.email.value;
    const message = form.mensaje.value;

    // enviar correo electrónico
    const response = await fetch('https://api.example.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      alert('Correo electrónico enviado con éxito!');
    } else {
      alert('Ocurrió un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.');
    }
  });



