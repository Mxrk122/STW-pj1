import React from 'react'
import IconSquare from './AsideBar/IconSquare'
import PlaylistList from './AsideBar/PlaylistList'
import SpaceCreator from './Utility/SpaceCreator'
import '../Assets/Styles/AsideBar.scss'

function AsideBar() {
  const playlistlist = [
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
    'This is Macross 82-99',
    'para mover el booty',
    'kanye west',
    'Sylosis',
    'Spicy',
    '¯\_(ツ)_/¯',
    '( ͡° ͜ʖ ͡°)',
  ]
  return (
    <div className="aside-bar">
      <IconSquare />
      <PlaylistList list={playlistlist} />
      <SpaceCreator height={92} />
    </div>
  )
}

export default AsideBar
