import React, { useContext } from 'react'

import BookDetails from './BookDetails'
import { BookContext } from '../contexts/BookContext'

const Booklist = () => {
    const {books} = useContext(BookContext)
    return (
        books.length ? (
            <div className='book-list'>
                <ul>
                    { books.map( book => {
                            return <BookDetails book={book} key= {book.id} />
                        })
                    }
                </ul>
            </div>
        ) : (
            <div>
                <p>No Books.</p>
            </div>
        )
    )
}

export default Booklist
