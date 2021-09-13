// forma impicita de invocar una funcion

//   ejemplo 1: vinculacion implicita

var taller = {
  teacher: "kosniowski",
  ask(question) {
    console.log(this.teacher, question);
    // -> output
    //   kosniowski que es la vinculacion implicita
  },
};

taller.ask("que es la vinculacion implicita");

// VINCULACION DINAMICA

// ejemplo 2:

function ask(question) {
  console.log(this.teacher, question);
}

var taller1 = {
  teacher: "kosniowski",
  ask: ask,
};

var taller2 = {
  teacher: "jose",
  ask: ask,
};

// ahora invocamos la funcion de manera dinamuca

taller1.ask("metodo compartido");
// -> kosniowski metodo compartido
taller2.ask("metodo compartido");
// -> jose metodo compartido

// NOtA: otro metodo explicito para llamar alas funciones es el metodo .call

// ejemplo 3:

function ask(question) {
  console.log(this.teacher, question);
}

var taller1 = {
  teacher: "kosniowski",
  ask: ask,
};

var taller2 = {
  teacher: "jose",
  ask: ask,
};

ask.call(taller1, "forma explicita de invocar");
// -> kosniowski forma explicita de invocar
ask.call(taller2, "forma explicita de invocar");
// -> jose forma explicita de invocar

// HARD BINDING

// ejemplo 4:
var taller3 = {
  teacher: "pedro",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(taller3.ask, 10, "perdido");
// undefined perdido

setTimeout(taller3.ask.bind(taller3), 10, "vinculacion dura");
// pedro vinculacion dura
