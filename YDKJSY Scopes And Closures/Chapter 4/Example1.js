// global scope exaple

var studentName = "Kyle";
function hello() {
  console.log(`Hello, ${window.studentName}!`);
}
window.hello();
// Hello, Kyle!
