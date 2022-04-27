/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

function SpaceCreator({ height }) {
  const altura = Number(height)

  const style = css`
  height: ${altura}px;
  `
  return (
    <div className="space-creator" css={style} />
  )
}

export default SpaceCreator
