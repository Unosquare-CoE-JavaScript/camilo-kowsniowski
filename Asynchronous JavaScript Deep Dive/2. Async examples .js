// example

console.log("Hello");
const takesALongTime = () => {
  // Function that takes 1 hour to run
  setTimeout(takesALongTime, 100000);
};
console.log("Bye");
