const boton = document.getElementById('suscrito');

function mostrarCartel(){
    boton.innerHTML = "Suscrito con exito"
}

const form = document.getElementById("subscription-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;

  console.log(`Correo ingresado: ${email}`);
});
