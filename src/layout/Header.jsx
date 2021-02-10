import React from 'react'
import { Link } from 'react-router-dom'
import homeSvg from '../../public/icons/home.svg'
import ButtonTheme from './ButtonTheme'
import { Wrapper } from './style-header'
export const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img style={{ filter: 'invert(100%)' }} width="20px" height="20px" src={homeSvg} alt="home"></img>
      </Link>
      <ButtonTheme/>
    </Wrapper>
  )
}
