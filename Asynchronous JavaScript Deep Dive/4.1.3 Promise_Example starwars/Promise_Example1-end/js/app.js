// opteniendo la informaciondesde una api

"use strict";

const swapi = function (num) {
  let url = "https://swapi.dev/api/people/";
  // utilizamos fetch para obtener los datos de la url
  fetch(url + num + "/")
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj);
      return fetch(obj.homeworld);
    })
    //   cuando se obtengan los datos  los convertiremos en un objeto
    .then((hwdata) => hwdata.json())
    // y los mostraremos por consola
    .then((hwobj) => console.log(hwobj));
};

swapi(9);

console.log("Other commands!");

// -> output

/*{
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [ 'https://swapi.dev/api/films/1/' ],
    species: [],
    vehicles: [],
    starships: [ 'https://swapi.dev/api/starships/12/' ],
    created: '2014-12-10T15:59:50.509000Z',
    edited: '2014-12-20T21:17:50.323000Z',
    url: 'https://swapi.dev/api/people/9/'
  }
  {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    residents: [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/4/',
      'https://swapi.dev/api/people/6/',
      'https://swapi.dev/api/people/7/',
      'https://swapi.dev/api/people/8/',
      'https://swapi.dev/api/people/9/',
      'https://swapi.dev/api/people/11/',
      'https://swapi.dev/api/people/43/',
      'https://swapi.dev/api/people/62/'
    ],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/'
    ],
    created: '2014-12-09T13:50:49.641000Z',
    edited: '2014-12-20T20:58:18.411000Z',
    url: 'https://swapi.dev/api/planets/1/'
  }
  'Other commands!' */
