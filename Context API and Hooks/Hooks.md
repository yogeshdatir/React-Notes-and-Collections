[TOC]

# Hooks

- > *Hooks* are a new addition in React 16.8. 
  >
  > <u>They let you use state and other React features without writing a class.</u>

- In short, Hooks are special functions.

- Hooks allow us to do additional things inside functional components.

  e.g. - Use state

- <u>Hooks **don’t** work inside classes.</u> But you can use them instead of writing classes.

# Rules of Hooks

1. ## Only Call Hooks at the Top Level

   **Don’t call Hooks inside loops, conditions, or nested functions.**

2. ## Only Call Hooks from React Functions

   **Don’t call Hooks from regular JavaScript functions.** Instead, you can:

   - ✅ Call Hooks from React function components.
   - ✅ Call Hooks from custom Hooks

# Hook functions

1. useState() - creates state within a function component.

   - `useState` is a *Hook*. 

   - We call it <u>inside a function component to add</u> some <u>local state</u> to it.

   - `useState` returns a pair: 

     i. the <u>*current* state value</u> and 

     ii. a <u>function</u> that lets you update it.

   - You can call this function from an event handler or somewhere else.

   - The **<u>only argument</u>** to `useState` is the initial state. 

   

   You can use the State Hook more than once in a single component:

   ```react
   function ExampleWithManyStates() {
     // Declare multiple state variables!
     const [age, setAge] = useState(42);
     const [fruit, setFruit] = useState('banana');
     const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
     // ...
   }
   ```

   The [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) syntax lets us give different names to the state variables we declared by calling `useState`. 

   

   SongList.js

   ```react
   import React, { useState } from 'react'
   import { v4 as uuidv4 } from 'uuid';
   
   export default function SongList() {
       const [songs, setSongs] = useState([
           { title: 'something1', id: 1 },
           { title: 'something2', id: 2 },
           { title: 'something3', id: 3 },
       ])
   
       const addSong = () => {
           setSongs([...songs, { title:'something more', id: uuidv4() }])
       }
   
       return (
           <div className="song-list">
               <ul>
                   {songs.map( song => ( <li key={song.id}>{song.title}</li> ) )}
               </ul>
               <button onClick={addSong}>Add Song</button>
           </div>
       )
   }
   ```

   

   useState() with forms

   

   NewSongForm.js

   ```react
   import React, { useState } from 'react'
   
   export default function NewSongForm({addSong}) {
       const [songName, setSongName] = useState('')
   
       const onChange = e => {
           setSongName(e.target.value)
       }
   
       const handleSubmit = e => {
           e.preventDefault()
           addSong(songName)
           // to clear input after form sunmission
           setSongName('')
       }
   
       return (
           <form onSubmit={handleSubmit}>
               <label>New Song: </label>
               <input type='text' value={songName} onChange={onChange} />
               <button>Add Song</button>
           </form>
       )
   }
   ```

   

   SongList.js

   ```react
   import React, { useState } from 'react'
   import { v4 as uuidv4 } from 'uuid';
   import NewSongForm from './NewSongForm';
   
   export default function SongList() {
       const [songs, setSongs] = useState([
           { title: 'something1', id: 1 },
           { title: 'something2', id: 2 },
           { title: 'something3', id: 3 },
       ])
   
       const addSong = title => {
           setSongs([...songs, { title , id: uuidv4() }])
       }
   
       return (
           <div className="song-list">
               <ul>
                   {songs.map( song => ( <li key={song.id}>{song.title}</li> ) )}
               </ul>
               {/* Added prop - fucntion to handle submit */}
               <NewSongForm addSong={addSong} />
           </div>
       )
   }
   ```

   

   

2. useEffect() - runs a code when a component renders or re-renders.
   - You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. 
   - We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.
   - The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. 
   - It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

   
   
3. useContext() - consume context in a function component.