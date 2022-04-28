import React from 'react'
import '../../Assets/Styles/Content.scss'
import SongContainer from './SongContainer'

function RecentlyPlayed({ list, PlaySong }) {
  // PlaySong se manda al songcontainer para que se cambie lac canción
  const texto = 'Escuchado recientemente'
  return (
    <div className="recently-played">
      <h1>{texto}</h1>
      <div className="rp-grid">
        {
            list.map((song) => <SongContainer song={song} PlaySong={PlaySong} />)
        }
      </div>
    </div>
  )
}

export default RecentlyPlayed
