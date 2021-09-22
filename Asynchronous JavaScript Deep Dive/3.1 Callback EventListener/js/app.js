//Example 4

//utilizaremos esta estructura de datos

let students = [
  { name: "Mary", score: 90, school: "East" },
  { name: "James", score: 100, school: "East" },
  { name: "Steve", score: 40, school: "East" },
  { name: "Gabe", score: 90, school: "West" },
  { name: "Rachel", score: 85, school: "East" },
  { name: "Rochelle", score: 95, school: "West" },
  { name: "Lynette", score: 75, school: "East" },
];

// creamos una functio que recorra el array
let processStudents = function (data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].school.toLowerCase() === "east") {
      if (typeof callback === "function") {
        callback(data[i]);
      }
    }
  }
};

// creamos una funcion que reciba 2 parametros uno los datos
//  y el otro el callback
processStudents(students, function (obj) {
  if (obj.score > 60) {
    console.log(obj.name + " passed!");
  }
});

let determineTotal = function () {
  let total = 0,
    count = 0;

  processStudents(students, function (obj) {
    total = total + obj.score;
    count++;
  });

  console.log("Total Score: " + total + " - Total Count: " + count);
};

determineTotal();
