import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

export default function SongList() {
    const [songs, setSongs] = useState([
        { title: 'something1', id: 1 },
        { title: 'something2', id: 2 },
        { title: 'something3', id: 3 },
    ])

    const [age, setAge] = useState(20)

    const addSong = title => {
        setSongs([...songs, { title , id: uuidv4() }])
    }

    // runs if any state changes
    useEffect(() => {
        console.log('useEffect')
    })

    // runs if age changes
    useEffect(() => {
        console.log('useEffect')
    }, [age])

    return (
        <div className="song-list">
            <ul>
                {songs.map( song => ( <li key={song.id}>{song.title}</li> ) )}
            </ul>
            {/* Added prop - fucntion to handle submit */}
            <NewSongForm addSong={addSong} />
            <button onClick={() => {setAge(age+1)}}>Add Age: {age}</button>
        </div>
    )
}
