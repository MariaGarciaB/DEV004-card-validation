import validator from './validator.js';

const button = document.getElementById("btnValidate");
button.addEventListener("click", validate);

function validate() {
  const cardnumber = document.getElementById("cardNumber").value;
  if (cardnumber === "") {
    document.getElementById("mensaje").textContent = "Ingresa tu número de tarjeta"
    return
  }
  const result = validator.isValid(cardnumber);
  if (result === true){
    document.getElementById("mensaje").textContent = "Gracias, tu tarjeta es válida"
    //document.getElementById("introduceNumber").style.display = "none"
    document.getElementById("introduceMaskify").style.display = "block"
  }else{
    document.getElementById("mensaje").textContent = "Tu tarjeta es inválida, intentalo nuevamente"
  }
}

function maskify (){
  const result = validator.maskify(document.getElementById("cardNumber").value);
  document.getElementById("cardNumber").value = ""
  document.getElementById("resultMichi").textContent = result
  //return result
}
button.addEventListener("click", maskify);

//console.log(validator);|





//  numero ejemplo tarjeta valida 4083952015263