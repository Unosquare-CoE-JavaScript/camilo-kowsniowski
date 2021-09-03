//  creamos una function  con uno de los parametros asignados

const add = function (a, b = 2) {
  console.log(arguments); // log [3]  // imprime args
  return a + b;
};

add(3);

// output -> 5  (a =2 + b = 3)

// ahora en ES5

const add = function (a, b) {
  b = b || 2; // operador 'or'
  console.log(arguments); // log [3]  // imprime args
  return a + b;
};

add(3);
