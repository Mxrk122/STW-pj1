/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from 'react'
import '../../Assets/Styles/AsideBar.scss'
import { css, jsx } from '@emotion/react'

function IsElement({ icon, text }) {
  // Cambiar el estilo si se trata de la opcion inicio
  const texto = text
  let iconStyle = css`
    color: #B3B3B3;
  `
  let textStyle = css`
    color: #B3B3B3;
  `
  if (text === 'Inicio') {
    iconStyle = css`
      color: #FFFFFF;
      `
    textStyle = css`
    color: #FFFFFF;
    `
  }

  return (
    <div className="is-element">
      <p className="icon" css={iconStyle}>{icon}</p>
      <p className="text-element" css={textStyle}>{text}</p>
    </div>
  )
}

export default IsElement
