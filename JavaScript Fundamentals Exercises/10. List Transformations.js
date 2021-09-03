//  se crea un funcion que contenera el metodo Speak

function CreateSuspectObjets(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is ", name);
    },
  };
}

//  en consola podemos  crear un objeto array

x = CreateSuspectObjets("Mis Scarlet");

// output -> array con el metodo speak

/*
{
  name: 'Mis Scarlet',
  color: 'Scarlet',
  speak: ƒ speak()
} 
*/

//  creamos un array de sospechosos

var suspecs = ["Miss Scarlet", "Colonel Mustard", "Mr White"];

//  creamos un array en blanco de lista de sospechosos

var suspecsList = [];

// si queremos agregar el metodo speak a los datos del array
// podemos usar un for

for (var i = 0; i < suspecs.length; i++) {
  // de manera que agregamos  la funcion que contiene "my name is" al array
  suspecsList.push(CreateSuspectObjects(suspects[i]));
}
