//  es una forma de desestructurar objetos para que la
//  escritura sea mas elegante

// example 1:
const game = {};

// creamos un array de personajes

game["suspects"] = [];

// agregamos un personaje
game.suspects.push({
  name: "Rusty",
  color: "Orange",
});

// otra foirma de agregarlo con el indice del array de personajes
game.suspects[1] = {
  name: "Miss Scarlet",
  color: "red",
};

/****************************************************************/

// NESTING  object
// es una forma de construir el objeto que es mas entendible
//  y sobretodo eficiente

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "Orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

game["suspects"];

// output ->
/*
[
    { name: 'Rusty', color: 'Orange' },
    { name: 'Miss Scarlet', color: 'red' }
  ] */
