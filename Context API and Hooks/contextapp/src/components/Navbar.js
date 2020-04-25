import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
           <>
            <nav>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
           </>
        )
    }
}
