/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from 'react'
import '../../Assets/Styles/AsideBar.scss'
import { css, jsx } from '@emotion/react'
import { RiHomeFill, RiSearchLine } from 'react-icons/ri'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { VscLibrary } from 'react-icons/vsc'
import { CgMathPlus } from 'react-icons/cg'
import { FaHeart } from 'react-icons/fa'
import IsElement from './IsElement'

function IconSquare() {
  const anotherIconSquare = css`
  margin-top: 10px;
  background: blue;`

  return (
    <div className="icon-square">
      <IsElement icon={<BiDotsHorizontalRounded />} text="" />
      <IsElement icon={<RiHomeFill />} text="Inicio" />
      <IsElement icon={<RiSearchLine />} text="Buscar" />
      <IsElement icon={<VscLibrary />} text="Tu Biblioteca" />
      <p>          </p>
      <IsElement icon={<CgMathPlus />} text="Crear Playlist" />
      <IsElement icon={<FaHeart />} text="Tus Me Gusta" />
    </div>
  )
}

export default IconSquare
