import React from 'react'
import '../../Assets/Styles/ReproductionBar.scss'
import { FaHeart } from 'react-icons/fa'

function SongPlaying({ song }) {
  return (
    <div className="song-playing">
      { song == null ? null : (
        <>
          <img src={song.portrait} alt="portrait" />
          <div className="song-playing-info">
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
          </div>
          <FaHeart className="heart" />
        </>
      )}
    </div>
  )
}

export default SongPlaying
