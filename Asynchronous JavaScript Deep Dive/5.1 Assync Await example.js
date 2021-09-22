"use strict";
// para utilizar async utilizamos la palabra reservada
// ejemplo 1

const pfunction = async function () {
  console.log("inicio");
  return "listo";
};

pfunction().then((val) => console.log(val));

// la podemos usar en una function expression
// la mayoria del tiempo que se usa async se debe utilizar await

// ejemplo 2

// teniendo esta funcion asincrona

const asyncFunction = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("valor importante");
    }, 2000);
  });
};

//  vamos a llamarla en esta funcion acon awati

const asyncFun = async function () {
  let p1 = await asyncFunction(); // funcion de arriba con el await
  console.log(p1);
  console.log(`${p1} -mas informacion `);
};
// en ves de usar .then
asyncFun();
