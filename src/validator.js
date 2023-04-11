const validator = {
  isValid,
  maskify,
};
function isValid(cardnumber) {
  // recibes el parametro
  const numberValid = cardnumber.split(""); //separar los números en string individuales
  const inverse = numberValid.reverse(); //array en orden inverso
  const posicionesPares = [];
  const posicionesImpares = [];
  let sumA = 0;
  let sumB = 0;
  let sumC = 0;
  for (let i = 0; i < inverse.length; i++) {
    //separar por posiciones
    const array = inverse[i];
    if (i % 2 === 1) {
      //selecciona pocisiones pares (operador modulo)
      const multiplication = +(array * 2); //multiplicar por 2 el valor de posiciones pares
      posicionesPares.push(array); //valor pocisiones pares en array
      if (multiplication > 9) {
        //seleccionar números mayores a 9
        const dosDigitos = multiplication.toString().split(""); //convertir a string mi true en mayores de 9 (suma pares)
        const sumaDosDigitos = Number(dosDigitos[0]) + Number(dosDigitos[1]); //Sumar ambos dígitos
        sumA = sumA + sumaDosDigitos; //sumar el resultado de todos los "sumaDosDigitos" se declara una variable fuera del for =0 para que comience a partir de ese número
      } else {
        sumB = sumB + multiplication; //suma pocisiones pares sin multiplicar
      }
    }
    if (i % 2 === 0) {
      //selecciona pocisiones impares
      sumC = sumC + Number(array);
      posicionesImpares.push(array); //valor pocisiones impares en array
    }
  }
  const sumaTotal = sumA + sumB + sumC; //Suma total
  if (sumaTotal % 10 === 0) {
    //si mi residual es =0, me da una tarjeta valida
    return true;
  } else {
    return false;
  }
}

function maskify(numero) {
  const numerosVisibles = numero.slice(-4);
  let numeral = "";
  for (let index = 0; index < numero.length; index++) {
    numeral = numeral + "#";
  }
  const forNumeral = numeral.slice(0, numeral.length - 4);
  const resultadoNumeral = forNumeral + numerosVisibles;
  return resultadoNumeral;
}
export default validator;
