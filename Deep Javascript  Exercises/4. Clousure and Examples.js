// Clausuras

// es la utilizacion de una funcion dentro de otr funcion
// la variable debe estar en el scope de la funcion externa

// clousure es cuando una funcion recuerda el lecical
// scope aun cuando la funcion es ejecutada o llamada
//  fuera del lexical scope a una funcion recuerda el lecical scope

// Ejemplo 1:

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("que es clousure");

// Ejemplo 2:

var teacher = "kyle";
var myTeacher = function () {
  console.log(teacher);
};

teacher = "susy";

myTeacher();

// clousure no esta capturando valores
// esta preservendo acceso alas variables

// Ejemplo 3 en un ciclo

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("j: ${j}");
  }, j * 1000);
}

//  j: 1
//  j: 2
//  j: 3
