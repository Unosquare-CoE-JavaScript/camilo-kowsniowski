// para este ejercicio se crea una tupla de la tabla

const crearTupla = (a, b, c, d) => {
  return [
    [a, c],
    [b, d],
  ];
};

crearTupla = ("it", "be", "cloud", "anyone", "no one"); //falta e

// spread operartor

const crearTupla = (a, b, c, ...d) => {
  return [
    [a, c],
    [b, d],
  ];
};

crearTupla = ("it", "be", "cloud", "anyone", "no one");

// output -> [["it", "could"] ["be", "anyone"], ["no one"]]
