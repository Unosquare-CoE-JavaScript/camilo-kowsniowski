//Example 1

let logCall = function () {
  console.log("locCall was called back.");
};

setTimeout(logCall, 3000); // logCall es el callback

//Example 2
// lo podemos hacer con una funcion anonima

setTimeout(function () {
  console.log("The function was called back.");
}, 3000);

//Example 3

let btn = document.querySelector("#item1");

btn.addEventListener("click", function (e) {
  console.log("The button was clicked.");
}); // el callback es la funcion
