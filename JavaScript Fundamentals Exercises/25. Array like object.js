const construcArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  arr.push("the billiars room");
  return arr.join(" ");
};
construcArr("was", "it", "in");

//  output 'was it in the billiars room'

// es6 type using Array.from
const construcArr = function () {
  const arr = Array.from(arguments); // remplaza slice
  arr.push("the billiars room");
  return arr.join(" ");
};
construcArr("was", "it", "in");
