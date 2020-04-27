[TOC]

# Hooks

- > *Hooks* are a new addition in React 16.8. 
  >
  > <u>They let you use state and other React features without writing a class.</u>

- In short, Hooks are special functions.

- Hooks allow us to do additional things inside functional components.

  e.g. - Use state

- <u>Hooks **don’t** work inside classes.</u> But you can use them instead of writing classes.

# Rules of Hooks

1. ## Only Call Hooks at the Top Level

   **Don’t call Hooks inside loops, conditions, or nested functions.**

2. ## Only Call Hooks from React Functions

   **Don’t call Hooks from regular JavaScript functions.** Instead, you can:

   - ✅ Call Hooks from React function components.
   - ✅ Call Hooks from custom Hooks

# Hook functions

1. useState() - creates state within a function component.

   - `useState` is a *Hook*. 

   - We call it <u>inside a function component to add</u> some <u>local state</u> to it.

   - `useState` returns a pair: 

     i. the <u>*current* state value</u> and 

     ii. a <u>function</u> that lets you update it.

   - You can call this function from an event handler or somewhere else.

   - The **<u>only argument</u>** to `useState` is the initial state. 

   

   You can use the State Hook more than once in a single component:

   ```react
   function ExampleWithManyStates() {
     // Declare multiple state variables!
     const [age, setAge] = useState(42);
     const [fruit, setFruit] = useState('banana');
     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
     // ...
   }
   ```

   The [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) syntax lets us give different names to the state variables we declared by calling `useState`.