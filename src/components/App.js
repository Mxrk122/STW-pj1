import React from 'react'
import '../Assets/Styles/app.scss'
import AsideBar from './AsideBar'
import Content from './Content'
import FriendsList from './FriendsList'

function App() {
  return (
    <div className="app">
      <AsideBar />
      <Content />
      <FriendsList />
    </div>
  )
}

export default App
