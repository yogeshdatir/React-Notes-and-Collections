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

