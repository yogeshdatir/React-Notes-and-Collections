[TOC]

# Context API

### Why to use?

React Context API is a way to essentially create global variables that can be passed around in a React app.

A clean and easy way to share state between components.



> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
>
> Context is primarily used when some data needs to be accessible by *many* components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
>
> **If you only want to avoid passing some props through many levels, [component composition](https://reactjs.org/docs/composition-vs-inheritance.html) is often a simpler solution than context.**



### Its alternatives - ways to share data between components

This is the alternative to

1. "prop drilling", or passing props from grandparent to parent to child, and so on.
2. "deep prop drilling"
3. "children prop"
4. Redux



### Different ways to use Context API

#### Using Class Component

##### **<u>i. Create a ThemeContext.js file.</u>**

**`ThemeContext.js`**

```jsx
import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }
    render() {
        return (
            // We are using children props here. The value from the ThemeContext.Provider will be available to all its childrens.
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
```



`**App.js**`

```jsx
import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
```

After this, you can access the state object from ThemeContext globally. (Use React Developer Tool)



##### <u>**ii. To access/consume the state:**</u>

**`Navbar.js`**

```react
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Navbar extends Component {
  // To access/consume a context.
  static contextType = ThemeContext
  render() {
    // Object destructuring
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark

    return (
      <>
        <nav style={{color: theme.syntax, background: theme.ui}}>
          <h1>Context App</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </>
    )
  }
}
```


