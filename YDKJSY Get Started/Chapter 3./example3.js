// this example

var homework = { topic: "JS", assignment: assignment };
homework.assignment();

// example 2 of
var otherHomework = { topic: "Math" };
assignment.call(otherHomework);
// Kyle says to study Math

// Protypes

// Consider defining an object as a normal literal:
var homework = { topic: "JS" };
// The homework object only has a single property on it: topic.
// However, its default prototype linkage connects to the Ob - ject.prototype object,
// which has common built -in meth - ods on it like toString() and valueOf(), among others.
// We can observe this prototype linkage delegation from home- work to Object.prototype:

homework.toString(); // [object Object]
homework.toString();
// works even though homework doesn’t have a toString() method defined;
// the delegation invokes Object.prototype.toString() instead.
