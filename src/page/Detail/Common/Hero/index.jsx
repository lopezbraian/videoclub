import React from 'react'
import { getUrlImage } from '../../../../utils/getUrlFromImages'
import './style-hero.scss'
export const Hero = ({ path }) => {
  const srcImage = getUrlImage('original', path)
  return (
    <div className="hero">
      {
      srcImage
        ? (<img loading="lazy" src={getUrlImage('original', path)}></img>)
        : ('')
      }
    </div>
  )
}
