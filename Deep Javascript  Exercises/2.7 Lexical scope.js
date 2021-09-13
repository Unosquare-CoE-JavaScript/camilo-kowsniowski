//  example of lexical scope

var teacher = "kyle"; //outer scope

function otherClass() {
  //middle scope
  var teacher = "susy";

  function ask(question) {
    // inner scope
    console.log(teacher, question);
  }
  ask("why?");
}

// example 2

var teacher = "kyle";

function ask(question) {
  console.log(teacher, question); // eeste es el scope dinamico
}

function otherClass() {
  var teacher = "susy";

  ask("why?");
}

otherClass();

// Function Scoping naming colition

var teacher = "kyle"; // la variable inicial nombrada

// ................

var teacher = "susy";
console.log(teacher); // susy

//...................................................................

console.log(teacher); // susy --- oops

// mantener todo en privado y solamente exponer lo necesario
