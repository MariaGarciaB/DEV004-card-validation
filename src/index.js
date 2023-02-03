import validator from './validator.js';

const button = document.getElementById("btnValidate");
button.addEventListener("click", validate);

function validate() {
  const cardnumber = document.getElementById("cardNumber").value;
  if (cardnumber === "") {
    alert("Ingresa los números de tu tarjeta")
  } else {
    validator.isValid(cardnumber)
    document.getElementById("introduceNumber").style.display = "none"
    document.getElementById("introduceMaskify").style.display = "block"
  }
  const result = validator.isValid(cardnumber);
  if (result === true){
    alert ("Gracias, Tu tarjeta es válida")
  }else{
    alert ("Tu tarjeta es inválida. Intentalo nuevamente")
  }
}

function maskify (){
  const result = validator.maskify(document.getElementById("cardNumber").value);
  document.getElementById("cardNumber").value = ""
  document.getElementById("resultMichi").textContent = result
  //return result
}
button.addEventListener("click", maskify);

//console.log(validator);