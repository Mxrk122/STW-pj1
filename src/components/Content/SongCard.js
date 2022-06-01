import React from 'react'
import '../../Assets/Styles/Content.scss'
import { GrPlayFill } from 'react-icons/gr'

function SongCard({ song, playSong }) {
  const setSong = () => {
    playSong(song)
  }
  return (
    <div className="song-card">
      <img src={song.portrait} alt="portrait" />
      <div className="play-button" onClick={setSong}>
        <GrPlayFill className="triangle" />
      </div>
      <div className="info-song-card">
        <h1>{song.title}</h1>
        <p>{song.artist}</p>
      </div>
    </div>
  )
}

export default SongCard
