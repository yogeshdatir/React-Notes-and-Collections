import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Booklist extends Component {
  // To access/consume a context.
  static contextType = ThemeContext

  render() {
    // Object destructuring
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark

    return (
      <>
        <div className="book-list"  style={{color: theme.syntax, background: theme.bg}}>
          <ul>
            <li style={{background: theme.ui}}>the way of kings</li>
            <li style={{background: theme.ui}}>the name of the wind</li>
            <li style={{background: theme.ui}}>the final empire</li>
          </ul>
        </div>
      </>
    )
  }
}
