import React from 'react'
import '../Assets/Styles/ReproductionBar.scss'
import SongPlaying from './ReproductionBar/SongPlaying'

function ReproductionBar({ songPlaying }) {
  // Se recibe el estado de la cancion que se esta reproduciendo
  console.log('DEsde Reproduction: ', songPlaying)
  return (
    <div className="reproduction-bar">
      <SongPlaying song={songPlaying} />
    </div>
  )
}

export default ReproductionBar
