import React from 'react'
import '../../Assets/Styles/Content.scss'
import SongContainer from './SongContainer'

function RecentlyPlayed({ list }) {
  const texto = 'Escuchado recientemente'
  return (
    <div className="recently-played">
      <h1>{texto}</h1>
      <div className="rp-grid">
        {
            list.map((song) => <SongContainer song={song} />)
        }
      </div>
    </div>
  )
}

export default RecentlyPlayed
