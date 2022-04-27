/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'
import '../../Assets/Styles/Content.scss'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { RiArrowDownSFill } from 'react-icons/ri'

function Header() {
  const userInfo = {
    photo: 'https://canchageneral.com/wp-content/uploads/2020/05/JPEGMAFIA-scaled.jpg',
    nickname: 'JPEGMAFIA',
  }
  return (
    <div className="header">
      <div className="arrows">
        <IoIosArrowDropleftCircle css={css`background-color: white; border-radius: 100%; `} />
        <IoIosArrowDroprightCircle css={css`background-color: white; border-radius: 100%;`} />
      </div>
      <div className="profile-menu">
        <img src={userInfo.photo} alt="profile-ph" />
        <p>{userInfo.nickname}</p>
        <RiArrowDownSFill className="arrow-down" />
      </div>
    </div>
  )
}

export default Header
