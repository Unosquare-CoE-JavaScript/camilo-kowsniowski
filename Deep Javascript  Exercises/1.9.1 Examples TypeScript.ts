//  Ejemplos de typeScript y flow  y
// como ayudan  en la escritura

//  ejemplo 1
var teacher = "camilo";

teacher = { name: "teacher" };
// error: no puedes asignar un objeto a un string

// ejemplo 2 Custom Types

type student = { name: string };

function getName(studentRec: student): string {
  return studentRec.name;
}

var firstStudent: student = { name: "camilo" };
var firstStudentName: string = getName(firstStudent);

// ejemplo 3 error validando tipos

var studentName: string = "camilo";

var studentCount: number = 16 - studentName;
// Error !! no se puede restar un string

// realizar lectura del siguiente articulo para ampiar el tema
//  https://github.com/niieani/typescript-vs-flowtype
