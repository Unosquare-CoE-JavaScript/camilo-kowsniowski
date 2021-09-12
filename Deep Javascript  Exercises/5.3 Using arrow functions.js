// usando las arrow functions en el  ejemplo anterior

// ejemplo 1:
var taller = {
  teacher: "kosniowski",
  ask(question) {
    // utilizamos las arrow functions
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  },
};

taller.ask("este es un lexical 'this'");

//
