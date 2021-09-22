//  como en javascriop no se tiene una interfaz predeterminada
//  este principio se puede entender de la siguiente formato

//  en JS vasmos a usar Class en ves de entidades

//  definimos una entidad

class Entity {
  constructor(name) {
    this.name = name;
  }
}

// definimimos las acciones de la entidad por aparte
const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} 
      for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health = amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

// definimos la clase personaje.

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

// prototipamos el personaje para que funcionec on los componentes

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

// ahora asignamos  ala pared  acciones que ella pueda hacer

class Wall extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

// prototipamos la pared

Object.assign(Wall.prototype, hasHealth);

// por ultimo asignamos ala torreta la acciones que puede realizar

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}

// prototipamos la torreta

Object.assign(Turret.prototype, attacker);

// finalmente inicializamos los objetos

// torreta con nombre y attackdamage
const turret = new Turret("Turret", 5);
// personaje con nombre attackDamage y salud
const character = new Character("mario", 3, 100);
// pared con salud
const wall = new Wall("Wall", 200);

// ahora  definimos las acciones de cada uno llamando las funciones

turret.attack(character);
character.move();
character.attack(wall);

// -> output

/*
'mario moved'
'Turret attacked mario 
      for 5 damage'
'mario attacked Wall 
      for 3 damage'
'mario has 5 health remaining'
'Wall has 3 health remaining'
*/
