import React from 'react'
import { Link } from 'react-router-dom'
import './style-header.scss'
import homeSvg from '../../public/icons/home.svg'
import { ButtonBack } from './ButtonBack'
import ButtonTheme from './ButtonTheme'

export const Header = () => {
  return (
    <div className="header">
        <ButtonBack/>
        <Link to="/">
          <img style={{ filter: 'invert(100%)' }} width="20px" height="20px" src={homeSvg} alt="home"></img>
        </Link>
        <ButtonTheme/>
    </div>
  )
}
