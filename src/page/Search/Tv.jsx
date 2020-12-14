import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import './style-tv.scss'

export const Tv = ({ data }) => {
  const url = getUrlImage(200, data.poster_path) || imageDefault
  console.log(url)
  return (
    <div className="tv-page-s">
      <img src={url} heigth="150px" width="100px"></img>
      <div className="tv-page-s__info">
        <h4>{data.original_name}</h4>
        <h5>{data.first_air_date}</h5>
      </div>
    </div>
  )
}
