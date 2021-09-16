/*
Proxy

Proxy es un patrón de diseño estructural 
que te permite proporcionar un sustituto o 
marcador de posición para otro objeto. 
Un proxy controla el acceso al objeto original, 
permitiéndote hacer algo antes o después de que 
la solicitud llegue al objeto original.

*/

// Ejemplo de Value proxy

class Percentage {
  constructor(percent) {
    this.percent = percent; // 0 to 100
  }

  toString() {
    return `${this.percent}%`;
  }

  valueOf() {
    return this.percent / 100;
  }
}

let fivePercent = new Percentage(5);
console.log(`${fivePercent} of 50 is ${50 * fivePercent}`);
