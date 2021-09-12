// ejemplos de patron modular requieren la utilizacion de encapsulacion

/*function WorkshoModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  // *************

  function ask(questions) {
    console.log(teacher, question);
  }
} */

//var workshop = WorkshopModule("Kyle");

//workshop.ask(" es un modulo , verdad?");

//  ejemplo en ES6

var teacher = "kyle";

export default function ask(question) {
  console.log(teacher, question);
}

// sin embargo para utilizar modulos de sebe utilizar la extemnsion .mjs
