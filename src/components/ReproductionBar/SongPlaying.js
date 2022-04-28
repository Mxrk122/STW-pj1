import React from 'react'
import '../../Assets/Styles/ReproductionBar.scss'

function SongPlaying({ song }) {
  return (
    <div className="song-playing">
      { song == null ? <h1>hola</h1> : (
        <>
          <img src={song.portrait} alt="portrait" />
          <div className="song-playing-info">
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default SongPlaying
