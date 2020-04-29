import React, { createContext, useState } from 'react'
import { v5 as uuidv5 } from 'uuid';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setbooks] = useState([
        {title: 'abc', id: 1}
    ])
    const addBook = ({title, author}) => {
        setbooks([...books, {title, author, id:uuidv5()}])
    }
    const removeBook = (id) => {
        setbooks(books.filter(book => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
