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
