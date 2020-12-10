import React from 'react'
import { Link } from 'react-router-dom'
import './style-header.scss'
export const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Top Peliculas</Link></li>
          <li><Link to="/">Top Series</Link></li>
        </ul>
      </nav>
      <div className="header__nav-user">
        <button></button>
      </div>
    </div>
  )
}
