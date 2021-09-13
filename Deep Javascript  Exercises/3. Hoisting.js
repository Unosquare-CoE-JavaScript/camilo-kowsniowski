// el Motro de javaScript en realidad no Hoisting -->

// _Example 1:_

student; //??
teacher; //??
var student = " you";
var teacher = "kyle";

// El motos de Javascript organiza la variable (aunque en realizdad no lo hace)

// _Example 2:_

function teacher() {
  return "jose";
}

var otherTeacher;

teacher(); /// Kyle
otherTeacher(); //TypeError

otherTeacher = function () {
  return "susy";
};
