# Scope Exposure

• Naming Collisions: if you use a common and useful variable/function name in two different parts of the program, but the identifier comes from one shared scope (like the global scope), then name collision occurs, and it’s very likely that bugs will occur as one part uses the variable/function in a way the other part doesn’t expect.
For example, imagine if all your loops used a single global i index variable, and then it happens that one loop in a function is running during an iteration of a loop from another function, and now the shared i variable gets an unexpected value.

• Unexpected Behavior: if you expose variables/func- tions whose usage is otherwise private to a piece of the program, it allows other developers to use them in ways you didn’t intend, which can violate expected behavior and cause bugs.
You Don’t Know JS Yet: Scope & Closures
Chapter 6: Limiting Scope Exposure 102
For example, if your part of the program assumes an array contains all numbers, but someone else’s code accesses and modifies the array to include booleans and strings, your code may then misbehave in unexpected ways.
Worse, exposure of private details invites those with mal-intent to try to work around limitations you have imposed, to do things with your part of the software that shouldn’t be allowed.

• UnintendedDependency:ifyouexposevariables/func- tions unnecessarily, it invites other developers to use and depend on those otherwise private pieces. While that doesn’t break your program today, it creates a refactoring hazard in the future, because now you can- not as easily refactor that variable or function without potentially breaking other parts of the software that you don’t control.
For example, if your code relies on an array of numbers, and you later decide it’s better to use some other data structure instead of an array, you now must take on the liability of adjusting other affected parts of the software.
