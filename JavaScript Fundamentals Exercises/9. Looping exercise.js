// descubriendo el culpable

var suspects = [
  {
    name: "Rusty",
    color: "Orange",
  },
  {
    name: "Miss Scarlet",
    color: "red",
  },
];

//  example 1 destructuring

var [color, color2] = [suspects[0], suspects[1].color2];

//  example 2 destructuring

var [{ color: firstColor }, { color: secondColor }] = suspects;

//  example 3 destructuring

var [firstObj, secondColor] = suspects;
