"use strict";

// def la funciones
const asyncFunction = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("asyncFunction has resolved.");
    }, 2000);
  });
};

const asyncFunction2 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("asyncFunction2 failed.");
    }, 2000);
  });
};

//realizamos el finally

asyncFunction()
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err))
  .finally(() => console.log("el proceso asyncFunction ha sido ejecutado"));

asyncFunction2()
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err))
  .finally(() => console.log("el proceso asyncFunction2 ha sido fallado"));
