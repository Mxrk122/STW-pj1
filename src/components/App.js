import React from 'react'
import '../Assets/Styles/app.scss'
import AsideBar from './AsideBar'
import Content from './Content'
import FriendsList from './FriendsList'
import ReproductionBar from './ReproductionBar'

function App() {
  // Estado para saber que cancion esta sonando
  const [playSong, setplaySong] = React.useState(null)

  // Funcion que se manda a content para reproducir la cancion
  const play = (song) => {
    setplaySong(song)
  }

  React.useEffect(() => { console.log(playSong) }, [playSong])

  const recentlyList = [
    {
      portrait: 'https://m.media-amazon.com/images/I/718khrgr5bL._SL1400_.jpg',
      title: 'We Major',
      artist: 'Kanye West',
    },
    {
      portrait: 'https://nacionprogresiva.files.wordpress.com/2019/01/press_cover_01.jpg',
      title: 'Mediocrity Wins',
      artist: 'Leprous',
    },
    {
      portrait: 'https://m.media-amazon.com/images/I/81iabVrElHL._SL1425_.jpg',
      title: 'I´m Broken',
      artist: 'Pantera',
    },
    {
      portrait: 'https://canchageneral.com/wp-content/uploads/2019/12/Cursor-COVER.jpg',
      title: '1539 N. Calvert',
      artist: 'JPEGMAFIA',
    },
    {
      portrait: 'https://i.discogs.com/rWhAvEIfe8oxfsr6ueU4NK1-VopLI6zt1vnvGFYIoQo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODcy/NzktMTU0NTA3MTc3/Mi03NTQ2LmpwZWc.jpeg',
      title: 'Blindfolds Aside ',
      artist: 'Protest the Hero',
    },
    {
      portrait: 'https://www.nacionrock.com/wp-content/uploads/R-400083-1325240634.jpeg.jpg',
      title: 'The Drapery Falls',
      artist: 'Opeth',
    },
  ]

  const slone = [
    {
      portrait: 'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/18/59/32/18593299-93d5-8076-528c-47ae7d53cf98/cover.jpg/1200x1200bf-60.jpg',
      title: 'The Blackest Skyline',
      artist: 'Sylosis',
    },
    {
      portrait: 'https://i.scdn.co/image/ab67616d0000b2732e3819b2d823305c12455038',
      title: 'Some Paradise',
      artist: 'L´impératrice',
    },
    {
      portrait: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/f/0/7/762491565262199.jpg',
      title: 'Bossa No Sé (feat. Jean Carter)',
      artist: 'Cuco',
    },
    {
      portrait: 'https://m.media-amazon.com/images/I/81UWfPobkoL._SL1500_.jpg',
      title: 'Workin´ Day and Night',
      artist: 'Michael Jackson',
    },
    {
      portrait: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/06/16/14975872992361.jpg',
      title: 'Airbag',
      artist: 'Radiohead',
    },
    {
      portrait: 'https://www.mautorland.com/wp-content/uploads/2018/07/E126082D-DAE1-4B57-87D0-28C3E56A78BA.jpeg',
      title: 'Hangar 18',
      artist: 'Megadeth',
    },
  ]

  const sltwo = [
    {
      portrait: 'https://www.mautorland.com/wp-content/uploads/2018/07/E126082D-DAE1-4B57-87D0-28C3E56A78BA.jpeg',
      title: 'Hangar 18',
      artist: 'Megadeth',
    },
  ]

  return (
    <div className="app">
      <AsideBar />
      <Content recentlyList={recentlyList} slone={slone} sltwo={sltwo} PlaySong={play} />
      <FriendsList />
      <ReproductionBar songPlaying={playSong} />
    </div>
  )
}

export default App
