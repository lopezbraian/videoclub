import React from 'react'
import { Link } from 'react-router-dom'
import './style-header.scss'
import homeSvg from '../../public/icons/home.svg'

export const Header = () => {
  return (
    <div className="header">
        <ul className="header__nav">
          <li>
            <Link to="/">
              <img style={{ filter: 'invert(100%)' }} width="20px" height="20px" src={homeSvg} alt="home"></img>
            </Link>
          </li>
        </ul>
    </div>
  )
}
