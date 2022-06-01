import React from 'react'
import '../Assets/Styles/ReproductionBar.scss'
import SongPlaying from './ReproductionBar/SongPlaying'
import Rbuttons from './ReproductionBar/Rbuttons'
import VolandSettings from './ReproductionBar/VolandSettings'

function ReproductionBar({ songPlaying }) {
  // Se recibe el estado de la cancion que se esta reproduciendo
  console.log('DEsde Reproduction: ', songPlaying)
  return (
    <div className="reproduction-bar noselect">
      <SongPlaying song={songPlaying} />
      <Rbuttons />
      <VolandSettings />
    </div>
  )
}

export default ReproductionBar
