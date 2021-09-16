/*
SINGLETON DEFINICION
el patrón de diseño singleton (instancia única) 
está diseñado para restringir la creación de objetos 
pertenecientes a una clase o el valor de un tipo a un 
único objeto. Su intención consiste en garantizar que u
se sólo tenga una instancia y proporcionar un punto de 
acceso global a ella.

*/

// ejemplo

class SINGLETON {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
  foo() {
    console.log("has algo....");
  }
}

let s1 = new SINGLETON();
let s2 = new SINGLETON();

console.log("son iguales? " + (s1 === s2));
s1.foo();
