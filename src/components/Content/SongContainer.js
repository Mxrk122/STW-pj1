import React from 'react'
import '../../Assets/Styles/Content.scss'
import { GrPlayFill } from 'react-icons/gr'

function SongContainer({ song }) {
  return (
    <div className="song-container">
      <img src={song.portrait} alt="portrait" />
      <p>{song.title}</p>
      <div className="play-button">
        <GrPlayFill className="triangle" />
      </div>
    </div>
  )
}

export default SongContainer
