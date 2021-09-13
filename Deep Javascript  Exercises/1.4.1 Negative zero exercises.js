if (!Object.is /*|| true*/) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else if (x === y) {
      return true;
    }

    return false;

    // **********

    function isItNegZero(x) {
      return x === 0 && 1 / x === -Infinity;
    }

    function isItNaN(x) {
      return x !== x;
    }
  };
}

// tests:
console.log(Object.is(42, 42) === true);
// true
console.log(Object.is("foo", "foo") === true);
// true
console.log(Object.is(false, false) === true);
// true
console.log(Object.is(null, null) === true);
// true
console.log(Object.is(undefined, undefined) === true);
// true
console.log(Object.is(NaN, NaN) === true);
// true
console.log(Object.is(-0, -0) === true);
// true
console.log(Object.is(0, 0) === true);
// true

/*falses*/

console.log(Object.is(-0, 0) === false);
// true
console.log(Object.is(0, -0) === false);
// true
console.log(Object.is(0, NaN) === false);
// true
console.log(Object.is(NaN, 0) === false);
// true
console.log(Object.is(42, "42") === false);
// true
console.log(Object.is("42", 42) === false);
// true
console.log(Object.is("foo", "bar") === false);
// true
console.log(Object.is(false, true) === false);
// true
console.log(Object.is(null, undefined) === false);
// true
console.log(Object.is(undefined, null) === false);
// true
