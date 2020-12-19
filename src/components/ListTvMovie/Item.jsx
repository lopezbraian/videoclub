import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import './style-item.scss'
import { Link } from 'react-router-dom'

export const Item = ({ data, type }) => {
  const url = getUrlImage(200, data.poster_path) || imageDefault
  return (
    <div>
      <Link to={type === 'movie' ? `/movie/${data.id}` : (`/tv/${data.id}`)}>
        <div className="item-name">
            <img src={url} heigth="250px" width="250px"></img>
            <div className="item-name__info">
              <p>{data.title || data.name}</p>
            </div>
        </div>
      </Link>
    </div>
  )
}
