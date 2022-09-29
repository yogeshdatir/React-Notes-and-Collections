# Redux thunk vs saga

Codesandbox links:

**1\. Saga:**

[React Redux with Hooks with redux saga - CodeSandbox](https://codesandbox.io/s/react-redux-with-hooks-with-redux-saga-4f44ks?file=/src/redux/sagas/index.js)

**2\. Thunk:**

[React Redux with Hooks with thunk - CodeSandbox](https://codesandbox.io/s/react-redux-with-hooks-with-thunk-34xq90?file=/src/redux/store.js)

Middlewares
===========

Middlewares intervene the workflow between action and reducer, operates the code inside the middleware asynchronously, wait for the response and then passes down the response to the reducer to update the state.

  

Thunk
=====

- With thunk, we make async requests or other async logic.

- It is more declarative style.

- It just provides us the ability to run some code asynchronously but doesn't provide any other things.

- Thunk provides space to use simple JS features, so learning curve is easy.

- But because of that, it can become difficult to scale up the app.

  

Saga
====

- Saga is more sophisticated solution in this paradigm.

- It provides specific solutions to different requirements such as throttling, debouncing and others.

- So, because of that it becomes a little imperative styled, involves more boilerplates.

- Saga uses ES6 feature called "Generators". Generator functions with the help of yeild keyword creates a cleaner way to design async code with side-effects.

- It does adds to a little difficult learning curve.

- With so many sophisticated features and use of modern JS functions, Saga makes is smooth to scale up the app.


## Some commonly used APIs a
### `call(fn, ...args)`[​](https://redux-saga.js.org/docs/api#callfn-args)

Creates an Effect description that instructs the middleware to call the function `fn` with `args` as arguments.

### `put(action)`[​](https://redux-saga.js.org/docs/api#putaction)

Creates an Effect description that instructs the middleware to schedule the dispatching of an action to the store. 

### `takeEvery(pattern, saga, ...args)`[​](https://redux-saga.js.org/docs/api#takeeverypattern-saga-args)

Spawns a `saga` on each action dispatched to the Store that matches `pattern`.

  

  

**Deboumcing in Thunk**
-----------------------

[Debouncing redux thunk actions](https://gist.github.com/krstffr/245fe83885b597aabaf06348220c2fe9)

```javascript
const innerFunction = debounce((dispatch, ...args) => setTimeout(() => dispatch(someOtherAction(...args)), 10000), 1000);
const asyncActionDebounced = (...args) => dispatch => innerFunction(dispatch, ...args);
```

  

Saga debouncing
---------------

**with debounce fn**

[API Reference | Redux-Saga](https://redux-saga.js.org/docs/api#debouncems-pattern-saga-args)

  
**with delay fn**

[Recipes | Redux-Saga](https://redux-saga.js.org/docs/recipes/#debouncing)

  

## References:

1.  blog
[Redux Thunk vs Redux Saga - InfoBeans CloudTech Limited](https://www.eternussolutions.com/2020/12/21/redux-thunk-redux-saga/)

2.  Generator functions
[Iterators and generators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

3.  Redux Saga docs
[About | Redux-Saga](https://redux-saga.js.org/docs/About)

4.  Redux thunk docs
[Writing Logic with Thunks | Redux](https://redux.js.org/usage/writing-logic-thunks#thunk-overview)
