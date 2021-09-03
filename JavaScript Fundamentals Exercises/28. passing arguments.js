//  add function

var inc = function (n) {
  return n + 1;
};

// square function

var squr = function (n) {
  return n * n;
};

// passing function

var doMath = function (n, func) {
  return func(n);
};

// call the function  whit the arguments

doMath(4, squr);

doMath(4, inc);

// es6

const inc = (n) => {
  return n + 1;
};
const squr = (n) => {
  return n * n;
};

const doMath = (n, func) => {
  return func(n);
};

// passing a function whit arguments

const ifElse = (condition, isTure, isFalse, p) => {
  return condition ? isTure : isFalse(p);
};

// pasamos los argumentos

isFalse(true, fn1, fn2, "hi"); // condition , isTrue, isFalse, p

//  tambien ser puede realizar con el spread operator
