"use strict";

// utilizaremos los datos de la url
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => data.json())
  .then((obj) => console.log(obj));

console.log("otro codigo");

// -> output

/*Promise { <pending> }

{
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
}
'otro codigo'*/

// si queremos un id especifico

let todo = {
  completed: false,
  userId: 1,
  title: "Learn Promises",
};

fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  //   convertimos el objeto en JSON
  body: JSON.stringify(todo),
})
  .then((resp) => resp.json())
  .then((obj) => console.log(obj))
  .catch((reject) => console.log(`unable to create todo ${reject}`));
console.log("otro codigo");

// -> output 2

/*
Promise { <pending> }

{
  completed: false,
  userId: 1,
  title: 'Learn Promises',
  id: 201
}
'otro codigo'
*/
