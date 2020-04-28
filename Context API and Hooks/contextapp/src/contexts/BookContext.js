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
