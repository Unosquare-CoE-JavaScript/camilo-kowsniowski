// realizamos esta funcion

const newClue = (name) => {
  const length = name.length;

  return (weapond) => {
    let clue = length + weapond.length;
    return !!(clue % 1);
  };
};

const lohizoMrGreenCon = newClue("Green"); // para saber quien lo hizo llamamnos ala funcion y la almacenmamos en una const

// output -> la funcion
//  ahora llamamos a el arma

lohizoMrGreenCon("candlestick");

//  output -> false
