const curry = (fn) => {
  // retornamos una funcion 1
  return (arg1) => {
    // retornamos una funcion 2
    return (arg2) => {
      // retornamos la fusion de las 2 funciones
      return fn(arg1, arg2);
    };
  };
};

//  ejemplo con suma: delcaramos una funcion que va a contener  otras 2 funciones.

const sumCurr = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const resul = sumCurr(4)(3)(5);

console.log(resul);

// resultado es 12
