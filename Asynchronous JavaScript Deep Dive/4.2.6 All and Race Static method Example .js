"use strict";

// exaple 1
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Listo");
  }, 4000);
});

p1.then(
  function (val) {
    console.log(val);
  },
  function (val) {
    console.log("rejected: " + val);
  }
);

console.log("el proximo es un codigo asincrono");

// para llamar alas funciones all y race utilizamos lo siguiente

Promise.all([]);

Promise.race();

// example 2
//  definimos 3 promesas

let firstName = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("camilo");
    }, 4000);
  });
};

let lastName = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("kosniowski");
    }, 3000);
  });
};

let middleName = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("aljoscha");
    }, 7000);
  });
};

//  utilizamos promise .all para que retorne una promesa

Promise.all([firstName(), lastName(), middleName()]).then(function (msg) {
  console.log(msg[0] + " " + msg[2] + " " + msg[1]);
});

// -> output
/*

camilo aljoscha kosniowski

['camilo', 'kosniowski', 'aljoscha']
0: "camilo"
1: "kosniowski"
2: "aljoscha"
length: 3

*/
