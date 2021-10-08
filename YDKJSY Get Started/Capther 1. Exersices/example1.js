// transpiler example

if (something) {
  let x = 3;
  console.log(x);
} else {
  let x = 4;
  console.log(x);
}

// -> babel change the code

var x$0, x$1;
if (something) {
  x$0 = 3;
  console.log(x$0);
} else {
  x$1 = 4;
  console.log(x$1);
}
