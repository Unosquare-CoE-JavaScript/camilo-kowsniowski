// iterator examples

// given an iterator of some data source:
var it = 4; /* .. */
// loop over its results one at a time
for (let val of it) {
  console.log(`Iterator value: ${val}`);
}
// Iterator value: ..
// Iterator value: ..
// ..

// Spread Example
// An array spread:
// spread an iterator into an array, // with each iterated value occupying // an array element position.
var vals = [...it];
// A function call spread:
// spread an iterator into a function,
// call with each iterated value
// occupying an argument position.
doSomethingUseful(...it);
