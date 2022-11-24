# Observer Pattern in React / ReactJS 

The observer pattern is one of the most common patterns in software design. In this pattern, a subject contains a list of observers who are apprised in the event of changes to the subject. 
The observer pattern is used by React in rendering UI and plays an important role in Redux in terms of managing the application state.

React consists of components, states, and props:
Components can be used as a modular representation of the UI.
States are just information or plain javascript objects that live inside components.
Props: When information is passed to another component, it is called a “prop.”
In React: Whenever a state within a component is changed, the component is re-rendered. When the state of the parent component is passed to its child component as a prop, the child component will be re-rendered when the prop is changed. As this is a recursive process.

If the state of the parent component is passed to the grandchild component, then the change will cause all dependent components holding that state to be re-rendered.
In this diagram, observers are the components that are holding the states, and the parent is the subject that is notifying the observers.

### In redux:
In redux, states are stored in a place called a store. Below is an example of this.
flow-chart2
The store contains the modules for the state. The states are stored in a particular module. For example, all metadata information is stored in the metadata module, and all user-related information is stored in the user info module, etc.
The observer pattern has nothing to do with React or Redux. It is not specific to any language or framework. It is a general pattern used in various contexts. This pattern is an example of one-to-many relationships by reducing the coupling between the objects.

Example of the observer pattern: Let’s create an input element and an empty div.

```
HTML code:-
<input type="input" class="input" />
<div class="d1"></div>

Js code:-
class Observable {
constructor() {
this.observer = [];
}
subscribe(item) {
this.observer.push(item);
}
unsubscribe(item) {
if(!this.observer) return 'empty';
else {
this.observer.filter(subscribe => subscribe !== item);
}
}
notify(data) {
this.observer.forEach(item => item(data));
}
}
var d1 = document.querySelector('.d1');
var input = document.querySelector('.input');
const update1 = text => d1.textContent = text;
var observarble = new Observable();
observarble.subscribe(update1);
input.addEventListener('keyup', event => observarble.notify(event.target.value));
```