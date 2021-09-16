class Person {
  constructor() {
    // Direccion
    this.streetAdress = this.postcode = this.city = "";

    // empleado
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }
  // convertimos en stringop los this
  toString() {
    return (
      `person lives at ${this.streetAdress},${this.city}, ${this.postcode} \n` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}

// creamos un builder para la persona (empleado)

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }
  get lives() {
    return new PersonAdressBuilder(this.person);
  }
  get works() {
    return new PersonJobBuilder(this.person);
  }
  //  creamos el metodo build

  build() {
    return this.person;
  }
}

// agregamos otro builder para el trabajo  que trabaja con el builder de empleado

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  // especificamos la empresa
  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }
  // especificamos el cargo
  asA(position) {
    this.person.position = position;
    return this;
  }
  //  especificamos el pago anual
  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}
// agregamos  otro builder para la direcccion

class PersonAdressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }
  at(streetAdress) {
    this.person.streetAdress = streetAdress;
    return this;
  }
  whithPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }
  in(city) {
    this.person.city = city;
    return this;
  }
}

// inicializamos los objetos

let pb = new PersonBuilder();
let person = pb.lives
  .at("cra 23 # 16 a 28")
  .in("cali")
  .whithPostcode("22222")
  .works.at("unosquare")
  .asA("engineer")
  .earning(1000)
  .build();

//   mostramos en consola los datos

console.log(person.toString());
