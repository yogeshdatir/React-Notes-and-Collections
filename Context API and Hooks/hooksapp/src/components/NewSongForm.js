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
