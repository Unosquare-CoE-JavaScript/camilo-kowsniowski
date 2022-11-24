# Introducción a Redux.js

Redux es una librería para controlar el estado de nuestras aplicaciones web fácilmente, de una forma consistente entre cliente y servidor, testeable y con una gran experiencia de desarrollo.

Redux está en gran parte influenciado por la arquitectura Flux propuesta por Facebook para las aplicaciones de React.js y por el lenguaje Elm, esta muy pensado para React.js, pero también se puede usar con Angular.js, Backbone.js o simplemente con Vanilla JS.

## Principios
Redux se basa en tres principios:

## Una sola fuente de la verdad
Todo el estado de tu aplicación esta contenido en un único store

Esto facilita depurar nuestra aplicación y crear aplicaciones universales cuyo estado en el servidor pueda serializarse para luego usarlo en el navegador sin mucho esfuerzo. Otras funcionalidades como atras/adelante se hacen más fáciles de implementar cuando tenemos un solo store con todo el estado de nuestra aplicación.

## El estado es de solo lectura
La única forma de modificar el estado es emitir una acción que indique que cambió

Esto te asegura que ninguna parte de la aplicación, como pueden ser eventos de la UI, callbacks o sockets, alteren directamente el estado de tu aplicación, en vez de eso emiten una intención de modificarlo.

Y gracias a que todas las modificaciones se centralizan y se ejecutan una por una es imposible que se pisen cambios. Por último como las acciones son objetos planos pueden mostrarse en consola o almacenarse para volverlas a ejecutar durante el debugging.

Los cambios se hacen mediante funciones puras
Para controlar como el store es modificado por las acciones se usan reducers puros

Los Reducers son funciones puras que reciben el estado actual de la aplicación y la acción a realizar y devuelven un nuevo estado, sin modificar directamente el estado actual. Podemos tener un solo Reducer encargado de toda nuestra aplicación o si esta crece dividirlo en múltiples funciones las cuales podemos controlar en que orden se ejecutan.

Instalando Redux en nuestro proyecto
Para instalar Redux es igual que cualquier librería/framework que esté en npm:

```1 npm i -S redux```

Luego podemos importarlo como cualquier otro módulo:

```1 import redux from "redux";```

Internamente va a descargar dos dependencias:

loose-envify - Inyecta variables de entorno
lodash - Colección de funciones utilitarias para programación funcional
Conceptos básicos
Redux es bastante fácil de aprender, aunque a simple vista no lo parezca, incluso es tan fácil que la librería es increíblemente pequeña (2kb minificada).

## Acciones
Las Acciones son POJOs (Plain Old JavaScript Objects) con al menos una propiedad que indica el tipo de acción y, de ser necesario, otras propiedades indicando cualquier otro dato necesario para efectuar nuestra acción. Normalmente se usa el formato definido en el Flux Standard Action (FSA).

```
1 {
2   "type": "ADD_TODO",
3   "payload": {
4     "text": "Aprender Redux"
5   }
6 }
```

Para enviar una acción a nuestro Store usamos la función store.dispatch() pasando nuestra acción como único parámetro.

## Creadores de acciones
Estos son simplemente funciones que pueden o no recibir parámetros y devuelven una acción (un POJO), es muy buena idea, para evitar problemas de consistencia, programar una función por cada tipo de acción y usarlas en vez de armar nuestros objetos a mano.

```
 1 /**
 2  * Devuelve una acción de tipo ADD_TODO
 3  * @param {String} text Texto del TODO
 4  * @return {Object} Objecto de acción
 5  */
 6 function addTodo(text) {
 7   return {
 8     type: "ADD_TODO",
 9     payload: {
10       text
11     }
12   };
13 }
```

Debido a que normalmente son funciones puras son fáciles de testear. Luego de ejecutar nuestra función, para poder despachar la acción, es simplemente llamar a la función dispatch(addTodo('Aprender Redux')).

## Reducers
Mientras que las acciones describen que algo ocurrió no especifican como nuestra aplicación reacciona a ese algo. De esto se encargan los Reducers.

Ya que el estado de nuestra aplicación es un único objeto es buena idea empezar a pensar cual va a ser la forma más básica antes de empezar a programar, como ejemplo vamos a suponer que hacemos una aplicación de TODOs por lo que nuestro store va a tener el siguiente formato:

```
1 {
2   "todos": []
3 }
```


Ahora que definimos la forma de nuestro store podemos empezar a crear reducers. Un reducer es una función pura que recibe el estado actual y una acción y devuelve el nuevo estado.

```1 (prevState, action) => nextState;```

Se llaman reducers porque son el tipo de funciones que pasarías a Array.prototype.reduce(reducer[, initialValue]). Es muy importante que se mantengan como funciones puras. Algunas cosas que nunca deberías hacer en un reducer:

* Modificar sus argumentos directamente (lo correcto es crear una copia)

* Realizar acciones con efectos secundarios como llamadas a una API o cambiar rutas

* Ejecutar funciones no puras como Date.now() o Math.random()

Que se mantengan puros quiere decir que pasandole los mismos parámetros debería siempre devolver el mismo resultado. Ahora vamos a programar un reducer para nuestra acción ADD_TODO:

```
 1 // cargamos el método de Redux para
 2 // poder combinar reducers
 3 import { combineReducers } from "redux";
 4 
 5 function todos(state = [], action = {}) {
 6   switch (action.type) {
 7     case "ADD_TODO":
 8       // creamos una copia del estado actual
 9       const copy = Array.from(state);
10       // modificamos lo que necesitamos
11       copy.push(action.payload.text);
12       // retornamos el nuevo estado
13       return copy;
14     default:
15       // si el action.type no existe o no concuerda
16       // con ningunos de los casos definidos
17       // devolvemos el estado sin modificar
18       return state;
19   }
20 }
21 
22 // combinamos nuestros reducers
23 // los keys que usemos para nuestros reducers
24 // van a ser usados como keys en nuestro store
25 // en este ejemplo sería: { todos: [], }
26 const reducers = combineReducers({
27   todos
28 });
29 
30 export default reducers;
```

Como se ve arriba Redux nos provee una función llamada combineReducers() que recibe un objeto con los reducers que definimos y los combina.

El nombre que le pongamos a cada reducer es usado como propiedad del store que creemos y es donde se va a guardar el estado devuelto por el reducer.

## Store
Por último necesitamos crear nuestro Store, el store va a tener cuatro responsabilidades:

Almacenar el estado global de la aplicación
Dar acceso al estado mediante store.getState()
Permitir que el estado se actualice mediante store.dispatch()
Registrar listeners mediante store.subscribe(listener)
Es importante recordar que solo podemos tener un store en nuestras aplicaciones de Redux, cuando quieras separar la lógica de manipulación de datos usa la composición de reducers en vez de muchos stores.

Para crear un store necesitamos una función de Redux y el reducer (o los reducers combinados) que vamos a usar:

```
 1 // cargamos la función para crear un store
 2 import { createStore } from "redux";
 3 // cargamos nuestros reducers (ya combinados)
 4 import reducers from "./reducers.js";
 5 // definimos el estado inicial
 6 const initialState = {
 7   todos: []
 8 };
 9 // creamos el store
10 const store = createStore(reducers, initialState);
11 export default store;
```

La función createStore simplemente recibe nuestros reducers como primer parámetro y nuestro estado inicial como segundo (y opcional), en el estado inicial podemos desde enviar simplemente la forma básica de nuestro store hasta enviar los datos recibidos desde el servidor.

Obteniendo nuestro estado
Una vez tenemos nuestro store creado podemos acceder al estado que almacena con store.getState() desde cualquier parte de nuestra aplicación donde importemos el store.

```
1 import store from "./store.js";
2 // vemos el estado actual del store
3 console.log(store.getState());
```

Subscribirse a los cambios de estado
Podemos suscribirnos al store para enterarnos cuando cambia y poder modificar nuestra aplicación en consecuencia usando store.subscribe(callback).

```
1 import store from "./store.js";
2 // nos suscribimos al store, esto nos devuelve
3 // una función que nos sirve para desuscribirnos
4 const unsubscribe = store.subscribe(() => {
5   // vemos el nuevo store
6   console.log(store.getState());
7   // nos desuscribimos
8   unsubscribe();
9 });
```

## Conclusión
Como se puede ver Redux es bastante simple de empezar a usar, y gracias a que es tan simple es posible combinarlo con prácticamente cualquier framework o librería que exista, ya sea React, Backbone, Angular 1/2, Ember, etc.