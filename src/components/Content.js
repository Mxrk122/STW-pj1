import React from 'react'
import '../Assets/Styles/Content.scss'
import Header from './Content/Header'
import RecentlyPlayed from './Content/RecentlyPlayed'
import SongsList from './Content/SongsList'
import SpaceCreator from './Utility/SpaceCreator'

function Content({
  recentlyList, slone, sltwo, slthree, slfour, slfive, PlaySong,
}) // PlaySong -> metodo para cambiar de cancion, se manda a todos los contenedores de canciones
{
  return (
    <div className="content">
      <Header />
      <RecentlyPlayed list={recentlyList} PlaySong={PlaySong} />
      <SongsList slTitle="Vuelve a tu música" slData={slone} />
      <SongsList slTitle="True music" slData={slone} />
      <SongsList slTitle="True music" slData={slone} />
      <SpaceCreator height={138} />
    </div>
  )
}

export default Content
