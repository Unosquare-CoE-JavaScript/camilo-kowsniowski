# Principal Concept

Closure builds on this approach: for variables we need to use over time, instead of placing them in larger outer scopes, we can encapsulate (more narrowly scope) them but still preserve access from inside functions, for broader use. Functions re- member these referenced scoped variables via closure.

Closure is a behavior of functions and only functions. If you aren’t dealing with a function, closure does not apply. An object cannot have closure, nor does a class have closure (though its functions/methods might). Only functions have closure.

## Adding Up Closures

Each instance of the inner addTo(..) function is closing over its own num1 variable (with values 10 and 42, respectively), so those num1’s don’t go away just because adder(..) fin- ishes. When we later invoke one of those inner addTo(..) instances, such as the add10To(15) call, its closed-over num1 variable still exists and still holds the original 10 value. The operation is thus able to perform 10 + 15 and return the answer 25.
(Example2)

## Observable Definition

We’re now ready to define closure:

    Closure is observed when a function uses vari- able(s) from outer scope(s) even while running in a scope where those variable(s) wouldn’t be accessible.

The key parts of this definition are:

    • Must be a function involved
    • Must reference at least one variable from an outer scope • Must be invoked in a different branch of the scope chain
    from the variable(s)
