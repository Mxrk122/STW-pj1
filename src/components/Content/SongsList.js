import React from 'react'
import '../../Assets/Styles/Content.scss'
import SpaceCreator from '../Utility/SpaceCreator.js'
import SongCard from './SongCard'

function SongsList({ slTitle, slData, playSong }) {
  return (
    <div className="song-list">
      <SpaceCreator height={46} />
      <div className="list-header">
        <h1>{slTitle}</h1>
        <p>VER TODO</p>
      </div>
      <div className="cards-grid">
        {
        slData.map((song) => <SongCard song={song} playSong={playSong} />)
        }
      </div>
    </div>
  )
}

export default SongsList
