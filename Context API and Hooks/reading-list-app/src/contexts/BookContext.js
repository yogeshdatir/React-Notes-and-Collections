import React, { createContext, useReducer, useEffect } from 'react'
import {bookReducer} from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    // the 3rd argument of the useReducer is initializer function which you can perform to initialize the state. 
    // e.g. fetch data from database, API, etc.
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    })

    // handles both add and remove or any any change in books state.
    // you can replace this with API or database transactions.
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
