# Context API

### Why to use?

React Context API is a way to essentially create global variables that can be passed around in a React app.

A clean and easy way to share state between components.



> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
>
> Context is primarily used when some data needs to be accessible by *many* components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
>
> **If you only want to avoid passing some props through many levels, [component composition](https://reactjs.org/docs/composition-vs-inheritance.html) is often a simpler solution than context.**



### Its alternatives

This is the alternative to

1. "prop drilling", or passing props from grandparent to parent to child, and so on.
2. "deep prop drilling"
3. "children prop"
4. Redux



### Different ways to use Context API

