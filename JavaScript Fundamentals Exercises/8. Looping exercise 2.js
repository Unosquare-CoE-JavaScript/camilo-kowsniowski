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

var gameLoop = function () {
  for (var i = 0; i < game.suspects.length; i++) {
    console.log("loop externo");
    for (var key in game.suspects[i]) {
      console.log("loop interno");
      if (game.suspects[i][key] === "Rusty") {
        console.log("Encontrado!!");
      } else {
        console.log("en otra oportunidad");
      }
    }
  }
};
