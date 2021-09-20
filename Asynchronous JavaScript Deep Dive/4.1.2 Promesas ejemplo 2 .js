// supongamos que tenemos unos datos  que deberian estar atravez de la red (API)

// teniendo una estructura de datos

const datos = [
  {
    id: 1,
    title: "iron man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman go home",
    year: 2014,
  },
  {
    id: 1,
    title: "Averngers infinity War",
    year: 2017,
  },
];

// creamos un const que obtenga los datos como si fuera
//  de una (API), con cierto delay

const getDatos = () => {
  return new Promise((resolve, reject) => {
    // Ccreamos un objeto promesa que tenga un resolve
    setTimeout(() => {
      resolve(datos);
    }, 1500); // pasados lo ssegundos mostrara los datos
  });
};

// llamamos a la funcion (then) cuando se resuelva

getDatos().then((datos) => console.log(datos));
