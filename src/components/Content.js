import React from 'react'
import '../Assets/Styles/Content.scss'
import Header from './Content/Header'
import RecentlyPlayed from './Content/RecentlyPlayed'
import SongsList from './Content/SongsList'

function Content({
  recentlyList, slone, sltwo, slthree, slfour, slfive,
}) {
  return (
    <div className="content">
      <Header />
      <RecentlyPlayed list={recentlyList} />
      <SongsList slTitle="Vuelve a tu música" slData={slone} />
    </div>
  )
}

export default Content
