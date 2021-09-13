//  la funciones como expresion tiene la caracteritica
//    tiene la palabra function primero

// ejempo 1
// funtion declaration
function teacher() {
  /*....*/
}

var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher);
};

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // reference error

// ejemplo 2
// function expression

var clickHandler = function () {
  /*...*/
};

/*
Beneficios de las Function expressions
-> recursividad
-> crea un codigo que puede ser mejor probado
-> crea un codigi que esta auto documentado

*/
