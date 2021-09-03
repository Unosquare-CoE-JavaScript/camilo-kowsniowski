// .MAP
// en este caso utilizaremos map
//  se debe tener en cuenta que each no retona nada
// map devuelve un array SIEMPRE

//  example:

_.map([1, 2, 3]),
  function (v, i, list) {
    console.log(v);
  };

//   output->

undefined;

// utilizandolo en un ejemplo

const weapons = [
  "candlestick",
  "lead pipe",
  "revolver",
  "revolver",
  "revolver",
];

const makeBroken = function (item) {
  return "broken $ (item)";
};
// explicacion

typeof _.map(weapons, makeBroken); // object
