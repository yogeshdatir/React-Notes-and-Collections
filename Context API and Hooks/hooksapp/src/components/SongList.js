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
