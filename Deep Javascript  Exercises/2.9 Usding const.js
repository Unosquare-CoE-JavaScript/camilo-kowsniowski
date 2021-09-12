//  ejemplo de uso de const

var teacher = "susy";

teacher = "kyle"; //ok

const myTeacher = teacher;
myTeacher = "susy"; // typeError

// en este caso podemos mutar la  constante
const teacher = ["kyle", "susy"];
teacher[1] = "brian"; // permitido

// RECOMENDACION

// utilizar CONST para valores primitivos y booleanos
// como las API urls
