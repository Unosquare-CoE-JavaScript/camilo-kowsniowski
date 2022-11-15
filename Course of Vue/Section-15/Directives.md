#Custom Directives
##Introduction
In addition to the default set of directives shipped in core (like v-model or v-show), Vue also allows you to register your own custom directives.

We have introduced two forms of code reuse in Vue: components and composables. Components are the main building blocks, while composables are focused on reusing stateful logic. Custom directives, on the other hand, are mainly intended for reusing logic that involves low-level DOM access on plain elements.

A custom directive is defined as an object containing lifecycle hooks similar to those of a component. The hooks receive the element the directive is bound to. Here is an example of a directive that focuses an input when the element is inserted into the DOM by Vue:

```
const focus = {
  mounted: (el) => el.focus()
}

export default {
  directives: {
    // enables v-focus in template
    focus
  }
}
```

`<input v-focus />`
This should be focused
Assuming you haven't clicked elsewhere on the page, the input above should be auto-focused. This directive is more useful than the autofocus attribute because it works not just on page load - it also works when the element is dynamically inserted by Vue.

Similar to components, custom directives must be registered so that they can be used in templates. In the example above, we are using local registration via the directives option.

It is also common to globally register custom directives at the app level:

```
const app = createApp({})

// make v-focus usable in all components
app.directive('focus', {
  /* ... */
})
```
more information: [directives](https://vuejs.org/guide/reusability/custom-directives.html#introduction)