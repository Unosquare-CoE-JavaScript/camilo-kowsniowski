// utilizamos la palabra reservada arguments

const crearTupla = (a, b, c, d) => {
  console.log(arguments);
  // output -> ["it", "be", "cloud", "anyone", "no one"]
  return [
    [a, c],
    [b, d],
  ];
};

crearTupla = ("it", "be", "cloud", "anyone", "no one"); //falta e
