// la utilizaccion de lapalabra NEW permite crear objetos nuevos

//  ejemplo

function ask(question) {
  console.log(this.teacher, question);
}

//  loq ue seria un "constructor"
var nObjetovacio = new ask("nuevo objeto");

// 1. creamos un nuevo objeto vacio
// 2. conectamos los objetos
// 3. llamamos con this al nuevo objeto vac
// 4. si la funcion no retorna un objeto retorna un this.

// ejemplo 2

//  si tenemos  un precedente vinculante debemos realizar lo siguientes

var taller = {
  teacher: "kosniowski",
  ask(question) {
    console.log(this.teacher, question);
    // -> output
    //   kosniowski que es la vinculacion implicita
  },
};

new (taller.ask.bind(taller))("que hace esto");
