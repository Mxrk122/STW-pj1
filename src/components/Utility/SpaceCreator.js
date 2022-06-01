/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

function SpaceCreator({ height, width }) {
  const altura = Number(height)
  const ancho = Number(width)

  const style = css`
  height: ${altura}px;
  width: ${ancho || 0}px;
  `
  return (
    <div className="space-creator" css={style} />
  )
}

export default SpaceCreator
