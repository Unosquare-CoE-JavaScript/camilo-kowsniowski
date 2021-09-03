const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },

  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
];

//
// declaramos una variable para los que no estan en la habitacion
const _ = require("underscore");

const notInRoom = (suspect, memo) => {
  // retornamos un array con todos los falsos de la estructura
  const emptyRooms = reduce(
    suspect.rooms,
    //   se realiza la comparacion y si devuelve false envia el dato al array room
    (room, memo) => {
      if (room === false) memo.push(room);
      return memo;
    },
    // el reduce no devuelve un array que vamos a llenar aqui
    []
  );
  return emptyRooms;
};
//  utilizamos map para devover un array de arrays de los qwue estan vacios
notInRooms = _.map(newDevelopment, notInRoom);

_.difference(...notInRooms);
