// en esta seccion se estudiaranel uso de  this y class{}

// -> this keyword es una scope dinamico

// ejemplo
function ask(question) {
  console.log(this.teacher, question); // this calling  susy why
}

function otherClass() {
  var myContext = {
    teacher: "susy",
  };
  ask.call(myContext, "Why"); // susy why?
}

otherClass();
