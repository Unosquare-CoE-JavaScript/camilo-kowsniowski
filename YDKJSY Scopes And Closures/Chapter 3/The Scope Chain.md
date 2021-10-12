# The Scope Chain

The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes. Scope chain in javascript is lexically defined, which means that we can see what the scope chain will be by looking at the code.

### note: The scope chain controls variable access, directionally oriented upward and outward.

## Arrow Functions =>

The => arrow function doesn’t require the word function to define it. Also, the ( .. ) around the parameter list is optional in some simple cases. Likewise, the { .. } around the function body is optional in some cases. And when the { .. } are omitted, a return value is sent out without using a return keyword.

### Note:

Other than being anonymous (and having no declarative
form), => arrow functions have the same lexical scope rules as You Don’t Know JS Yet: Scope & Closures

Chapter 3: The Scope Chain 54
function functions do. An arrow function, with or without { .. } around its body, still creates a separate, inner nested bucket of scope. Variable declarations inside this nested scope bucket behave the same as in a function scope.
