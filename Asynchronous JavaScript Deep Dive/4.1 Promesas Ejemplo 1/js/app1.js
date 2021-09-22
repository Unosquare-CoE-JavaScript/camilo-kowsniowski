"use strict";

//  la llamda de la promesa se realiza mediante un setTimeout
let asyncFunction = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("asyncFunction has resolved.");
    }, 4000);
  });
};

let asyncFunction2 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("asyncFunction2 is done.");
    }, 3000);
  });
};
