import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'

export default function Booklist() {
  // Object destructuring
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  const { books } = useContext(BookContext)

  return (
    <div className="book-list"  style={{color: theme.syntax, background: theme.bg}}>
      <ul>
        { books.map( book => {
          return (<li key= {book.id} style={{background: theme.ui}}>{ book.title }</li>)
        }) }
      </ul>
    </div>
  )    
}
