[TOC]

# Context API

## Why to use?

React Context API is a way to essentially create global variables that can be passed around in a React app.

A clean and easy way to share state between components.



> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
>
> Context is primarily used when some data needs to be accessible by *many* components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
>
> **If you only want to avoid passing some props through many levels, [component composition](https://reactjs.org/docs/composition-vs-inheritance.html) is often a simpler solution than context.**



## Its alternatives - ways to share data between components

ContextAPI is the alternative to

1. "prop drilling", or passing props from grandparent to parent to child, and so on.
2. "deep prop drilling"
3. "children prop"
4. Redux



## Different ways to use Context API

### Steps to create Context:

1. Create a context file.
2. Update the App.js (or appropriate parent), add context provider.
3. Then you can use this context in any component inside context provider.



### Using useState() and useContext()  Hook - Functional Context (preferred way)

useContext() - consume context in a function component.

#### <u>i. Creating a single/multiple context(s) using useState() Hook. Or Creating a Functional Context</u>

BookContext.js

```react
import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export default function BookContextProvider(props) {
    const [books, setbooks] = useState([
        { title: 'the way of kings' , id:1 },
        { title: 'the name of the wind', id:2 },
        { title: 'the final empire', id:3 },
        { title: 'the fi', id:4 }
    ])
    
    return (
        <BookContext.Provider value={{ books }}>
            { props.children }
        </BookContext.Provider>
    )
}
```

<u>**Wrap Context Provider around the target component in App.js.**</u>

For multiple contexts, nested context providers are used as shown below.

App.js

```react
import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          {/* since books will be needed only in Booklist Component, we will wrap BookContextProvider only around Booklist Component, */}
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
```

------

#### 

#### <u>ii. Accessing state using useContext Hook.</u>

Booklist.js


```react
import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Booklist() {
  // Object destructuring
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  return (
    <div className="book-list"  style={{color: theme.syntax, background: theme.bg}}>
      <ul>
        <li style={{background: theme.ui}}>the way of kings</li>
        <li style={{background: theme.ui}}>the name of the wind</li>
        <li style={{background: theme.ui}}>the final empire</li>
      </ul>
    </div>
  )    
}
```

------

#### <u>iii. Accessing multiple states using useContext Hook.</u>

​	useContext Hook can be called multiple times.

NavBar.js

```react
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

function Navbar() {

  // Object destructuring
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)

  return (
    <nav style={{color: theme.syntax, background: theme.ui}}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        { isAuthenticated ? 'LoggedIn' : 'LoggedOut' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
```

------

#### <u>iv. To update the state using useState()</u>

AuthContext.js

```react
import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated: isAuthenticated, toggleAuth: toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}
```

App.js

```react
import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          {/* since books will be needed only in Booklist Component, we will wrap BookContextProvider only around Booklist Component, */}
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
```





### Using Class Component

#### **<u>i. Create a Context.</u>**

Create a ThemeContext.js file.

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

**Wrap Context Provider around the target component in App.js.**

`App.js`

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

------

#### <u>**ii. To access/consume the state:**</u>

##### a. Using **`contextType`**

This method can be used only in class components.

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

##### b. Using **`Consumer`**

This method can be used in functional components as well.

```react
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Booklist extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          // Object destructuring
          const { isLightTheme, light, dark } = context
          const theme = isLightTheme ? light : dark
          return (
            <div className="book-list"  style={{color: theme.syntax, background: theme.bg}}>
              <ul>
                <li style={{background: theme.ui}}>the way of kings</li>
                <li style={{background: theme.ui}}>the name of the wind</li>
                <li style={{background: theme.ui}}>the final empire</li>
              </ul>
            </div>
          )          
        }}        
      </ThemeContext.Consumer>
    )
  }
}
```

------

#### **<u>iii. To update the state:</u>**

​	Add the required function to update the state.

​	Send the function through the value prop.

**`ThemeContext.js`**

``` react
import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (
            // We are using children props here. The value from the ThemeContext.Provider will be available to all its childrens.
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

```

Create ThemeToggle.js

​	Handle the change with user input.

```react
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ThemeToggle extends Component {
    static contextType = ThemeContext

    render() {
        const { toggleTheme } = this.context

        return (
            <button onClick={toggleTheme}>Toggle Theme</button>
        )
    }
}

```

Update the UI

```react
import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        // Add button
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
```

------

#### <u>**iv. Adding multiple Contexts**</u>

**`AuthContext.js`**

```react
import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

export default class AuthContextProvider extends Component {
    state = {
        isAuthenticated: true
    }

    toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
```

**<u>`App.js`</u>**

```react
import React from 'react';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      // Nest the Context Providers
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
```

------

#### <u>**v. Consuming multiple Contexts**</u>

​	Two ways to consume multiple Contexts: 

1. Nesting Context Consumers
2. One of the Contexts can use contextType

**`Navbar.js`**

```react
import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

export default class Navbar extends Component {
  // To access/consume a context.
  static contextType = ThemeContext
  render() {
    // Object destructuring
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark

    return (
      <AuthContext.Consumer>{ (authContext) => {
        const { isAuthenticated, toggleAuth } = authContext
        return (
          <nav style={{color: theme.syntax, background: theme.ui}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
              { isAuthenticated ? 'LoggedIn' : 'LoggedOut' }
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}
      </AuthContext.Consumer>
    )
  }
}
```

------


