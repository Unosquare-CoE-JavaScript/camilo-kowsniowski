
//  destructurin es comunmente urilizado en react
//  cuando usamos los estados de los Hooks

// create an object using this data

// {'name':'Rusty',"room':'kitchen','weapon':'candlestick'};

// example 1

const game = ({ name, room, weapon } = {
  name: "Rusty",
  room: "kitchen",
  weapon: "candlestick",
});

//  example 2 

const arr = ["🥓 ", "🍕", "🍟 "];

const [bacon, rest];

//  example 3 

//  swap variables 

var a = 1, b = 2;
// antes
/*var temp = a;
a = b;
b = temp;*/
// ahora
[b, a] = [a, b];

console.log (a,b)