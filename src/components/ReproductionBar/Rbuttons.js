import React from 'react'
import '../../Assets/Styles/ReproductionBar.scss'
import {
  IoIosShuffle, IoIosSkipBackward, IoIosSkipForward, IoIosRepeat,
} from 'react-icons/io'
import { GrPlayFill } from 'react-icons/gr'
import SpaceCreator from '../Utility/SpaceCreator.js'
import ProgressBar from './ProgressBar'

function Rbuttons() {
  const space = 20
  return (
    <div className="r-buttons">
      <div className="buttons">
        <IoIosShuffle className="r-button" />
        <SpaceCreator width={space} />
        <IoIosSkipBackward className="r-button" />
        <SpaceCreator width={space} />
        <div className="rep-play-button r-button">
          <GrPlayFill className="rep-triangle" />
        </div>
        <SpaceCreator width={space} />
        <IoIosSkipForward className="r-button" />
        <SpaceCreator width={space} />
        <IoIosRepeat className="r-button" />
      </div>
      <ProgressBar />
    </div>
  )
}

export default Rbuttons
