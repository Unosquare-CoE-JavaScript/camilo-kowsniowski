##Vue Router
is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:

* Nested routes mapping
* Dynamic Routing
* Modular, component-based router configuration
* Route params, query, wildcards
* View transition effects powered by Vue.js' transition system
* Fine-grained navigation control
* Links with automatic active CSS classes
* HTML5 history mode or hash mode
* Customizable Scroll Behavior
* Proper encoding for URLs

more information : [router] (https://router.vuejs.org/guide/#javascript)

### History API
The DOM Window object provides access to the browser's session history (not to be confused for WebExtensions history) through the history object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

### Concepts and usage
Moving backward and forward through the user's history is done using the back(), forward(), and go() methods.

Moving forward and backward
To move backward through history:

`window.history.back()`

This acts exactly as if the user clicked on the Back button in their browser toolbar.

Similarly, you can move forward (as if the user clicked the Forward button), like this:

`window.history.forward()`

Moving to a specific point in history
You can use the go() method to load a specific page from session history, identified by its relative position to the current page. (The current page's relative position is 0.)

To move back one page (the equivalent of calling back()):

`window.history.go(-1)`

To move forward a page, just like calling forward():

`window.history.go(1)`

Similarly, you can move forward 2 pages by passing 2, and so forth.

Another use for the go() method is to refresh the current page by either passing 0, or by invoking it without an argument:

// The following statements
// both have the effect of
// refreshing the page
`window.history.go(0)
window.history.go()`
Copy to Clipboard
You can determine the number of pages in the history stack by looking at the value of the length property:

`let numberOfEntries = window.history.length`

###API Reference#

to#
Type: RouteLocationRaw

Details:

Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally, so it can either be a string or a route location object.