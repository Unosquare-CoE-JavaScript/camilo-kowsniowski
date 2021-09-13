//  vamos a utilizar este ejercicio como ejemplo

var teacher = "camilo"; // scope general

function otherClass() {
  var teacher = "yurani"; // declared but never used
  console.log("bienvenido");
}

function ask() {
  var question = "porque?";
  console.log(question);
}

// llamamos las funciones

otherClass(); // esta enla posicion de source
ask();

// ejemlpo 2

var teacher = "kyle"; //

function anotherClass() {
  teacher = "susy";
  topic = "React";
  console.log("bienvenido");
}

anotherClass();

teacher;
topic;

// ejemplo 3 usando el modo estricto

("use strict");

var teacher = "kyle";

function otherclass() {
  teacher = "suzy";
  topic = "React"; // reference error
  console.log("Bienvenido");
}

otherclass();

// ejemplo 4 nested scope

var teacher = "pedro";

function otraClase() {
  var teacher = "kosniowski";

  function ask(question) {
    console.log(teacher.question); // undefined
  }

  ask("porque");
}

otraClase();
ask("???????"); // ReferenceError: ask is not defined porque esta fuera del; scope
