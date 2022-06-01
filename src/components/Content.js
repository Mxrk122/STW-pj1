import React from 'react'
import '../Assets/Styles/Content.scss'
import Header from './Content/Header'
import RecentlyPlayed from './Content/RecentlyPlayed'
import SongsList from './Content/SongsList'
import SpaceCreator from './Utility/SpaceCreator'

function Content({
  recentlyList, slone, sltwo, slthree, slfour, slfive, PlaySong,
}) // PlaySong -> metodo para cambiar de cancion, se manda a todos los contenedores de canciones

// Thunder: bad bunny, ete sech
{
  return (
    <div className="content">
      <Header />
      <RecentlyPlayed list={recentlyList} PlaySong={PlaySong} />
      <SongsList slTitle="Vuelve a tu música" slData={slone} playSong={PlaySong} />
      <SongsList slTitle="Alejandor gomez:" slData={sltwo} playSong={PlaySong} />
      <SongsList slTitle="Como te gustó Ricardito:" slData={slthree} playSong={PlaySong} />
      <SpaceCreator height={138} />
    </div>
  )
}

export default Content
