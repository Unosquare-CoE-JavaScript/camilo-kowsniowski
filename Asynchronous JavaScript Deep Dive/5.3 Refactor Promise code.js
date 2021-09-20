"use strict";
// para refactorizar el codigo debemos utulizar las palabras
//  reservadas async y await
//  y vamos a utlizar una nueva funcion llamada for await

const moviePlanets = async function (movieNum) {
  let url = "https://swapi.dev/api/films/";
  try {
    // paraverificar si es un numeros de la planet
    if (isNaN(movieNum)) {
      throw "debes escribir un numero";
    }
    let movieObject = await $.getJSON(url + "/movie/" + movieNum + "/");

    console.log(movieObject.title);

    // uso de for await
    let promises = movieObject.planets.map((url) => $.getJSON(url));

    // respondemos esas promesas con for await almacenandolos datos el pl
    for await (let pl of promises) {
      console.log(pl.name);
    }
  } catch (e) {
    console.log(e);
  }

  // const moviePlanets = function (movieNum) {
  //   let url = "https://swapi.dev/api/films/";

  //   // llamamos por medio de jquery los datos
  //   $.getJSON(url + movieNum + "/")
  //     .then(function (response) {
  //       console.log(response.title);

  //       response.planets.forEach((p) =>
  //         $.getJSON(p).then((pl) => console.log(pl.name))
  //       );
  //     })
  //     .catch((reject) => console.log(`Couldn't retrieve films: ${reject}`));
  // };

  // debe ser un numero
  moviePlanets(3);

  console.log("Remaining code");
};
