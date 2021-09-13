// usamos las declaraciones para bloquear el scope
// podemos hacerlo usando let

// ejemplo1
var teacher = "kyle";
{
  let teacher = "Susy";
  console.log(teacher); // susy
}

console.log(teacher); // kyle

// ejemplo 2

function diferencia(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return x - y;
}

diferencia(8, 2); // - 6

//ejemplo 3

function repetir(fn, n) {
  var result;

  for (let i = 0; i < n; i += 1) {
    result = fn(result, i);
  }
  return result;
}

repetir(24, 23);

// var  se puede usar en el scope pero let  solamente se puede usar en el scope donde esta siendo declarada
