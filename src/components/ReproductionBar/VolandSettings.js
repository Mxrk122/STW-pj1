import React from 'react'
import '../../Assets/Styles/ReproductionBar.scss'
import { BiVolumeLow } from 'react-icons/bi'
import ProgressBar from './ProgressBar'

function VolandSettings() {
  return (
    <div className="volandsettings">
      <BiVolumeLow />
      <ProgressBar />
    </div>
  )
}

export default VolandSettings
