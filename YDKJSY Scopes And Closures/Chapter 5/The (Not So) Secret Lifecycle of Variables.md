## Hoisting: Declaration vs. Expression

Function hoisting only applies to formal function declara- tions , not to function expression assignments. Consider: (Example1)

## hoisting

hoisting being a concrete execution step the JS engine per- forms, it’s more useful to think of hoisting as a visualization of various actions JS takes in setting up the program before execution.
The typical assertion of what hoisting means: lifting—like lifting a heavy weight upward—any identifiers all the way to the top of a scope. The explanation often asserted is that the JS engine will actually rewrite that program before execution, so that it looks more like this: (example 2)
