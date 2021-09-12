// ejemplo de como funciona una clase en prototipos.

function Taller(teacher) {
  this.teacher = teacher;
}

Taller.prototype.aks = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Taller("kosniowski");
var reactJS = new Taller("Pedro");

deepJS.ask("es una clase prototipo?");
reactJS.ask("es horrible?");
