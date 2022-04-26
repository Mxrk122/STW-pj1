import React from 'react'
import '../Assets/Styles/FriendsList.scss'
import { BsPersonPlusFill } from 'react-icons/bs'
import List from './FriendsList/List'

function FriendsList() {
  const friends = [
    {
      photo: 'https://i.kym-cdn.com/entries/icons/original/000/033/421/cover2.jpg',
      nickname: 'El canaca',
      song: 'Patricio estrella',
      artist: 'Steven',
      lastaActivity: '5 h',
    },
    {
      photo: 'https://wikirock.net/wp-content/uploads/2020/12/rs-3616-rectangle.jpg',
      nickname: 'Dimebag Darrel',
      song: 'I´m Broken',
      artist: 'Pantera',
      lastaActivity: '3 h',
    },
    {
      photo: 'https://wikirock.net/wp-content/uploads/2020/12/rs-3616-rectangle.jpg',
      nickname: 'Dimebag Darrel',
      song: 'I´m Broken',
      artist: 'Pantera',
      lastaActivity: '3 h',
    },
    {
      photo: 'https://wikirock.net/wp-content/uploads/2020/12/rs-3616-rectangle.jpg',
      nickname: 'Dimebag Darrel',
      song: 'I´m Broken',
      artist: 'Pantera',
      lastaActivity: '3 h',
    },
  ]
  return (
    <div className="friends-list">
      <div className="friends-header">
        <h1>Actividad de amigos</h1>
        <BsPersonPlusFill className="add-friend" />
      </div>
      <List listofFriends={friends} />
    </div>
  )
}

export default FriendsList
