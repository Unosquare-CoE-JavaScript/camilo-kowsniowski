//  definimos la variable

function isValidName(name) {
  if (
    typeof name == "string" &&
    // trim elimina los escaciova vacios de la ecuacion
    name.trim().length >= 3
  ) {
    //   en este caso devolvemos verdadero
    return true;
  }
  // sino se cumple la condicion devolvemos falso
  return false;
}

//  esta funcion recibe 2 parametros
function hoursAttended(attended, length) {
  // si attended es un string devolveremos un numero
  if (typeof attended == "string" && attended.trim() != "") {
    attended = Number(attended);
  }
  // si length es un string devolveremos un numero
  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }
  // agregamos las condiciones
  // si son numeros
  // si son mayores a 0
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended <= length &&
    attended >= 0 &&
    length >= 0 &&
    //   utilizamos la utilidad de JS isInteger (es decis no es una fracion)
    Number.isInteger(attended) &&
    Number.isInteger(length)
  ) {
    return true;
  }

  return false;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);

// -> output

/*
  true
  true
  true
  true
  true
  
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  true
  
  */
