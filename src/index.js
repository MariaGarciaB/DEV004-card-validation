import validator from './validator.js';

function validate() {
  const cardnumber = document.getElementById("cardNumber").value;//por medio del btnValidate, se captura el valor en caja vacía
  if (cardnumber === "") {
    alert("Ingresa los números de tu tarjeta") //Marcar un error cuando no ingresa texto (Operadores lógicos)
  } else {
    validator.isValid(cardnumber) // enviamos argumento a nueva funcion
  }
  //esta esla invocaciónn de la funcion
  const result = validator.isValid(cardnumber);
  console.log(result)
  if (result === true){
    alert ("Gracias, Tu tarjeta es válida")
  }else{
    alert ("Tu tarjeta es inválida. Intentalo nuevamente")
  }
}

const button = document.getElementById("btnValidate");// Llamar al boton
button.addEventListener("click", validate);//Manejador de eventos, añade funcionalidad



console.log(validator);


//invocar una función...a compaño funcion con parentesis
// hasta este momento aún no hacemos algo
//verificar los valores despues de dar click boton
//buscar, alertas, interacción, actualizar, leer cosas en un div, mensajes a ususaros, ergc.