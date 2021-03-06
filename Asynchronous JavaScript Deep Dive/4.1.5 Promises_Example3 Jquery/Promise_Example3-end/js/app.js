"use strict";

const moviePlanets = function (movieNum) {
  let url = "https://swapi.dev/api/films/";

  // llamamos por medio de jquery los datos
  $.getJSON(url + movieNum + "/")
    .then(function (response) {
      console.log(response.title);

      response.planets.forEach((p) =>
        $.getJSON(p).then((pl) => console.log(pl.name))
      );
    })
    .catch((reject) => console.log(`Couldn't retrieve films: ${reject}`));
};

moviePlanets(3);
