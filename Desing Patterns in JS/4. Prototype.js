/*

DISEÑO de prototipos
un objeto parcial o totalmente 
inicializado que copia (clona) y 
hace uso de él

*/

// ejemplo de uso

class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }
  // creamos el metodo deepCopy
  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }

  // creamos el metodo toString

  toString() {
    return `Address: ${this.streetAddress}, ` + `${this.city}, ${this.country}`;
  }
}
/****************************************************************************************************************************************************/
class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  // creamos el metodo deepCopy
  deepCopy() {
    return new Person(
      this.name,
      this.address.deepCopy() // needs to be recursive
    );
  }

  // creamos el metodo toString
  toString() {
    return `${this.name} lives at ${this.address}`;
  }
}

// OBJETOS Y LLAMADAS

// creamos una persona con los datos de las clases
// camilo se convierte en un prototipo por medio de el cual creamos copias
let camilo = new Person("camilo", new Address("cra 23 aranjuez", "cali", "CO"));

// como copiamos objetos s en JS??

let jane = camilo.deepCopy();

jane.name = "Jane";
jane.address.streetAddress = "cra 22 aranjuez"; // oops

console.log(camilo.toString()); // oops, john is called 'jane'
console.log(jane.toString());
