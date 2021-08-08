import React from 'react'
import { Link } from 'react-router-dom'
import homeSvg from '../images/icons/home.svg'
import ButtonTheme from './ButtonTheme'
import { Wrapper } from './style-header'
export const Header = () => {
  return (
    <Wrapper>
      <ButtonTheme />
      <Link to="/">
        <img style={{ filter: 'invert(100%)' }} width="20px" height="20px" src={homeSvg} alt="home"></img>
      </Link>
    </Wrapper>
  )
}
