// utilizamos el mismo ejemplo anterior

function CreateSuspectObjets(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is ", name);
    },
  };
}

//  creamos un array de sospechosos

var suspecs = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

//  creamos un array en blanco de lista de sospechosos

var suspecsList = [];

/* PARA ESTE EJERCICIO SE UTILIZA LA LIBRERIA UNDESCORE JS
cuya documentacion se encuentra en el siguiente enlace 
https://underscorejs.org/
 en esta seccion se utilizara la funcion _.each */

// ejemplo de uso reemplaza el for

_.each(suspecs, function (name) {
  // pasamos los nombres
  suspecsList.push(CreateSuspectObjets(name));
});

// ejemplo de uso de map

var suspecsList = _.map(suspecs, function (name) {
  return CreateSuspectObjets(name);
});

// output
/*suspecsList
(3) [{…}, {…}, {…}]
0: {name: "Miss Scarlet", color: "Scarlet", speak: ƒ}
1: {name: "Colonel Mustard", color: "Mustard", speak: ƒ}
2: {name: "Mr White", color: "White", speak: ƒ}
length: 3 */
