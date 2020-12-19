import React from 'react'
import { getUrlImage } from '../../../../utils/getUrlFromImages'
import './style-hero.scss'
export const Hero = ({ path }) => {
  return (
    <div className="hero">
      <img loading="lazy" src={getUrlImage('original', path)}></img>
    </div>
  )
}
