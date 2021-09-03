//  arrow function example
const nombre = (name, adj) => {
  return "camilo kosniowski";
};

nombre();

//  es la nueva forma de realizar una funcion  que retorna algo directamente

// ejemplo comparativo

function mostrarDatos(nombre, apellido) {
  return "$ {nombre} ${apellido}";
}

console.log(mostrarDatos("camilo", "kosniowski"));

// ahora como Arrow Function
// los parentessis son obligatorios si hay mas de un parametro

const mostrarDatos = (nombre) => "${nombre}";
console.log(mostrarDatos("camilo"));
