import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

export default class AuthContextProvider extends Component {
    state = {
        isAuthenticated: true
    }

    toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
