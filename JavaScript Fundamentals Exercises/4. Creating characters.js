// clue game

// inity the game

var game = {};

// def  de case murderer

game.murderer = "??";

// create array whit weapons whit key and value (type and location)
game["weapons"] = [
  { type: "lasers", location: "lab" },
  { type: "angry cats", location: "kitchen" },
  { type: "dish soap", location: "bathroom" },
];
// create a push characters
// create array of names
game.name = [];
game.name[0] = "Ms Scarlet";
// to add a name to the game
game.name.push("Mr. Green");

// output

["Miss Scarlet", "Mr. Green"];
