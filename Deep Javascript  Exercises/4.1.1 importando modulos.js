// como se importan los modilos

import ask from "./4.1 module pattern.mjs";

ask("es el import por default , Verdad");

// -> OUTPUT
// kyle es el import por defecto, Verdad?

import * as workshop from "./4.1 module pattern.mjs";

workshop.ask("es un import con espacio de nombre ,Verdad?");

// kyle es un import con espacio de nombre ,Verdad?
