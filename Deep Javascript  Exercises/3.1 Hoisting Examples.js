// mas ejemplos de hoisting

// mal uso
reacher = "jose";

var teacher;

// function hoisting
//  imo actually  is pretty useful

getTeacher();

function getTeacher() {
  return teacher;
}

// let doenst hoist???
//  FALSE

{
  teacher = "jose"; // TDZ error
  let teacher;
}

var teacher = "jose";

{
  console.log(teacher); /// tdz error
  let teacher = "susy";
}
