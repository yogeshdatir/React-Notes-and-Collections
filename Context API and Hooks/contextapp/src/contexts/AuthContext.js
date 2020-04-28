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
