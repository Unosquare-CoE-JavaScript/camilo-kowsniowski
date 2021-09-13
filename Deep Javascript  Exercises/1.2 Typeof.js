// el operador typeof nos devuelve siempre un string con el tipo de dato primitivo

//  examples:

var v;
typeof v; // "undefined"

v = "1";
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "bolean"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"

var v = null;
typeof v; // "object" OOPs

v = function () {};
typeof v; // "function"

v = [1, 2, 3];
typeof v; // "object"

typeof noExiste; // "undefined"
