const _ = {};

// exercise

_.each = function (list, callback) {
  // callback function
  if (Array.isArray(list)) {
    // lopp en el  list
    for (var i = 0; i < list.length; i++) {
      // el callback lo llamamos con el valor , luego el index, y luego el dato
      callback(list[i], i, list); // list[sally], sally, array
    }
  } else {
    // objeto
    for (var key in list) {
      callback(list[key], key, list);
    }
  }
};
//  datos para rellenar

_.each(["sally", "george", "camilo"], function (name, i, list) {
  //sally, 0
  //  si hay uno antes sally es mas joven que george
  if (list[i + 1]) {
    //true (george)
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest"); //revisa de nuevo
  }
});
