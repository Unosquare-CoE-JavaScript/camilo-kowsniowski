// usando el patron de diseno Class {}
// se pueden definir con extends o no

//  para mas informacion realizar lectura de MDN web docs

// ejemplo 1:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

console.log(Rectangle.name);

// -> Rectangle

// ejemplo 2:
class taller {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = (question) => {
      console.log(this.teacher, question);
    };
  }
}

var deepjs = new taller("kosniowski");

setTimeout(deepjs.ask, 100, "esta this arreglado");

// ejemplo 3:

//  clases como expresiones

// unnamed
let Triangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Triangle.name);
// output: "Rectangle"

// named
let Triangle2 = class Triangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Triangle.name);
// output: "Rectangle2"
