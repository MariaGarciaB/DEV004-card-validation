import validator from './validator.js';

function validate() {
  const cardnumber = document.getElementById("cardNumber").value;//por medio del btnValidate, se captura el valor en caja vacía
  if (cardnumber === "") {
    alert("Ingresa los números de tu tarjeta") //Marcar un error cuando no ingresa texto (Operadores lógicos)
  } else {
    console.log(cardnumber)
    //isValid (cardnumber) // enviamos argumento a nueva funcion
  }
}

const button = document.getElementById("btnValidate");// Llamar al boton
button.addEventListener("click", validate);//Manejador de eventos, añade funcionalidad



console.log(validator);



// hasta este momento aún no hacemos algo
//verificar los valores despues de dar click boton
//buscar, alertas, interacción, actualizar, leer cosas en un div, mensajes a ususaros, ergc.