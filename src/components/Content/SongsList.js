import React from 'react'
import '../../Assets/Styles/Content.scss'
import SpaceCreator from '../Utility/SpaceCreator.js'

function SongsList({ slTitle, slData }) {
  return (
    <div className="song-list">
      <SpaceCreator height={46} />
      <h1>{slTitle}</h1>
    </div>
  )
}

export default SongsList
