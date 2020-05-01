// this is just a regular js function
import { v4 as uuidv4 } from 'uuid';

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            // just return the state after performing operation
            return [
                ...state, {
                    title: action.book.title,
                    author: action.book.author,
                    id: uuidv4()
                }
            ]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default: 
            return state
    }
}