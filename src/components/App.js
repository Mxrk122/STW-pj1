import React from 'react'
import '../Assets/Styles/app.scss'
import AsideBar from './AsideBar'
import Content from './Content'
import FriendsList from './FriendsList'

function App() {
  const recentlyList = [
    {
      portrait: 'https://m.media-amazon.com/images/I/718khrgr5bL._SL1400_.jpg',
      title: 'We Major',
    },
    {
      portrait: 'https://nacionprogresiva.files.wordpress.com/2019/01/press_cover_01.jpg',
      title: 'Mediocrity Wins',
    },
    {
      portrait: 'https://m.media-amazon.com/images/I/81iabVrElHL._SL1425_.jpg',
      title: 'I´m Broken',
    },
    {
      portrait: 'https://canchageneral.com/wp-content/uploads/2019/12/Cursor-COVER.jpg',
      title: '1539 N. Calvert',
    },
    {
      portrait: 'https://i.discogs.com/rWhAvEIfe8oxfsr6ueU4NK1-VopLI6zt1vnvGFYIoQo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODcy/NzktMTU0NTA3MTc3/Mi03NTQ2LmpwZWc.jpeg',
      title: 'Blindfolds Aside',
    },
    {
      portrait: 'https://www.nacionrock.com/wp-content/uploads/R-400083-1325240634.jpeg.jpg',
      title: 'The Drapery Falls',
    },
  ]

  const slone = [
    {
      portrait: 'https://m.media-amazon.com/images/I/718khrgr5bL._SL1400_.jpg',
      title: 'We Major',
    },
    {
      portrait: 'https://nacionprogresiva.files.wordpress.com/2019/01/press_cover_01.jpg',
      title: 'Mediocrity Wins',
    },
    {
      portrait: 'https://m.media-amazon.com/images/I/81iabVrElHL._SL1425_.jpg',
      title: 'I´m Broken',
    },
    {
      portrait: 'https://canchageneral.com/wp-content/uploads/2019/12/Cursor-COVER.jpg',
      title: '1539 N. Calvert',
    },
    {
      portrait: 'https://i.discogs.com/rWhAvEIfe8oxfsr6ueU4NK1-VopLI6zt1vnvGFYIoQo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODcy/NzktMTU0NTA3MTc3/Mi03NTQ2LmpwZWc.jpeg',
      title: 'Blindfolds Aside',
    },
    {
      portrait: 'https://www.nacionrock.com/wp-content/uploads/R-400083-1325240634.jpeg.jpg',
      title: 'The Drapery Falls',
    },
  ]

  return (
    <div className="app">
      <AsideBar />
      <Content recentlyList={recentlyList} slone={slone} />
      <FriendsList />
    </div>
  )
}

export default App
