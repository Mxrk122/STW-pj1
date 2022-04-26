import React from 'react'
import Friend from './Friend'
import '../../Assets/Styles/FriendsList.scss'

function List({ listofFriends }) {
  return (
    <div className="list">
      {
            listofFriends.map((friend, id) => <Friend key={id} friend={friend} />)
        }
    </div>
  )
}

export default List
