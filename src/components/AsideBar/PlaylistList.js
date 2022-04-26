import React from 'react'
import '../../Assets/Styles/AsideBar.scss'

function PlaylistList({ list }) {
  return (
    <div className="playlist-list">
      <p>
        {
          list.map((playlist) => <div className="playlist-title">{playlist}</div>)
        }
      </p>
    </div>
  )
}

export default PlaylistList
