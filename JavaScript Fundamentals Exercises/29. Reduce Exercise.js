//  ejemplo de funcionamiento
//  pasamos los valores uniciales y la funcionamiento
_.reduce(
  [1, 2],
  function (sum, n) {
    // retornamos la funcion
    return sum + n;
    // inicializamos el reduce con 0
  },
  0
);

// => devuelve 3

//  examples:

var reduced = function (list, cb, initial) {
  // loop trough list
  for (var i = 0; i < list.length; i++) {
    memo = cb(list[i], memo);
  }
  return memo;
};

reduce([1, 2, 3], (v, sum) => (v = sum));
