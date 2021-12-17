# Principal concepts

## Transpilation and polyfilling:

"Transpilation and polyfilling are two highly effective tech- niques for addressing that gap between code that uses the latest stable features in the language and the old environments a site or application needs to still support. Since JS isn’t going to stop improving, the gap will never go away. Both techniques should be embraced as a standard part of every JS project’s production chain going forward."

## Cutting the gap:

"Transpilers like Babel typically detect which polyfills your code needs and provide them automatically for you. But
You Don’t Know JS Yet: Get Started
Chapter 1: What Is JavaScript? 31 occasionally you may need to include/define them explicitly,
which works similar to the snippet we just looked at."

## JS is a parsed language:

"in spirit, if not in practice, JS is a compiled language.
And again, the reason that matters is, since JS is compiled, we are informed of static errors (such as malformed syntax) before our code is executed. That is a substantively different interaction model than we get with traditional “scripting” programs, and arguably more helpful!"

### The entire flow of a JS source program:

1. After a program leaves a developer’s editor, it gets tran- spiled by Babel, then packed by Webpack (and perhaps half a dozen other build processes), then it gets delivered in that very different form to a JS engine.
2. The JS engine parses the code to an AST.
3. Then the engine converts that AST to a kind-of byte
   code, a binary intermediate representation (IR), which is then refined/converted even further by the optimizing JIT compiler.
4. Finally, the JS VM executes the program.

## Strict mode:

"The benefits of strict mode far outweigh the costs, but old habits die hard and the inertia of existing (aka “legacy”) code bases is really hard to shift. So sadly, more than 10 years later, strict mode’s optionality means that it’s still not necessarily the default for JS programmers.
