/*
State

State es un patrón de diseño de comportamiento 
que permite a un objeto alterar su comportamiento 
cuando su estado interno cambia. 
Parece como si el objeto cambiara su clase.

*/

// ejemplo Clasico

class Switch {
  constructor() {
    this.state = new OffState();
  }

  on() {
    this.state.on(this);
  }

  off() {
    this.state.off(this);
  }
}

class State {
  constructor() {
    if (this.constructor === State) throw new Error("abstract!");
  }

  on(sw) {
    console.log("Light is already on.");
  }

  off(sw) {
    console.log("Light is already off.");
  }
}

class OnState extends State {
  constructor() {
    super();
    console.log("Light turned on.");
  }

  off(sw) {
    console.log("Turning light off...");
    sw.state = new OffState();
  }
}

class OffState extends State {
  constructor() {
    super();
    console.log("Light turned off.");
  }

  on(sw) {
    console.log("Turning light on...");
    sw.state = new OnState();
  }
}

let sw = new Switch();
sw.on();
sw.off();
sw.off();
