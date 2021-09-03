// reutilizamos la estrutura anterior

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

// realizamos en loop para recorer el objeto
// ejemplo de loop 1

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}

for (let key in obj) {
  obj[key];
}

// llamamos la funcion
foo();
