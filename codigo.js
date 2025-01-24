// Seleccionar el formulario
const form = document.getElementById("subscription-form");

// Manejar el envío del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar recargar la página

  // Obtener el valor del email
  const email = document.getElementById("email").value;

  // Mostrar un mensaje en la consola (o realizar una acción con el correo)
  console.log(`Correo ingresado: ${email}`);
  alert("¡Gracias por suscribirte!");
});
