import React from 'react'
import '../../Assets/Styles/FriendsList.scss'
import { BsDot } from 'react-icons/bs'
import { IoIosMusicalNotes } from 'react-icons/io'

function Friend({ friend }) {
  return (
    <div className="friend">
      <img src={friend.photo} alt="profile img" />
      <div className="info">
        <h1>{friend.nickname}</h1>
        <div className="song-info">
          <p>{friend.song}</p>
          <BsDot />
          <p>{friend.artist}</p>
        </div>
        <div className="song-box">
          <IoIosMusicalNotes />
          <p>{friend.song}</p>
        </div>
        <div className="last-activity">{friend.lastaActivity}</div>
      </div>
    </div>
  )
}

export default Friend
