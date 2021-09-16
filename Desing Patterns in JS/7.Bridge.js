/*
Bridge
Bridge es un patrón de diseño 
estructural que te permite dividir 
una clase grande, o un grupo de clases 
estrechamente relacionadas, en dos jerarquías 
separadas (abstracción e implementación) 
que pueden desarrollarse independientemente 
la una de la otra.

*/

class VectorRenderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixels for circle of radius ${radius}`);
  }
}

class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

// imagine Square, Triangle
// different ways of rendering: vector, raster
// we don't want a cartesian product of these

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);
circle.draw();
circle.resize(2);
circle.draw();
