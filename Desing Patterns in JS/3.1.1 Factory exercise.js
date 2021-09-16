/*

Se le da una clase llamada Persona. La persona tiene
  dos campos: id y nombre.

  Implemente una PersonFactory que tenga un
  createPerson no estático (); método que toma un
  person's name y devuelve una persona inicializada con este nombre y una identificación.

  La identificación de la persona debe establecerse como un índice basado en 0 del
  objeto que haya creado cualquier instancia de PersonFactory. Entonces, la primera persona
  las marcas de fábrica deben tener Id = 0, segundo Id = 1 y así sucesivamente.

*/

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  createPerson(name) {
    // todo
    return new Person(PersonFactory.id++, name);
  }
}
