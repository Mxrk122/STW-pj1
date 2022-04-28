import React from 'react'
import '../../Assets/Styles/Content.scss'
import { GrPlayFill } from 'react-icons/gr'

function SongContainer({ song, PlaySong }) {
  // Se recibe el metodo para cambiar el estado, se cambia la cancion
  const setSong = () => {
    PlaySong(song)
  }
  return (
    <div className="song-container">
      <img src={song.portrait} alt="portrait" />
      <p>{song.title}</p>
      <div className="play-button" onClick={setSong}>
        <GrPlayFill className="triangle" />
      </div>
    </div>
  )
}

export default SongContainer
