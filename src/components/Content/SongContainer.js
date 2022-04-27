import React from 'react'
import '../../Assets/Styles/Content.scss'

function SongContainer({ song }) {
  return (
    <div className="song-container">
      <img src={song.portrait} alt="portrait" />
      <p>{song.title}</p>
    </div>
  )
}

export default SongContainer
