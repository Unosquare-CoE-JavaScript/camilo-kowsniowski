// example of not accesible variables

var one = 1;
let notOne = 2;
const notTwo = 3;
class notThree {}
console.log(window.one); // 1
console.log(window.notOne); //undefined, not one
console.log(window.notTwo); // undefined
console.log(window.notThree); // undefined

// example 2

var special = 42;
function lookingFor(special) {
  // The identifier `special` (parameter) in this // scope is shadowed inside keepLooking(), and // is thus inaccessible from that scope.
  function keepLooking() {
    var special = 3.141592;
    console.log(special);
    console.log(window.special);
  }
  keepLooking();
}
lookingFor(112358132134);

// 3.141592
// 42
