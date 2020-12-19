import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import './style.scss'
import { Link } from 'react-router-dom'

export const PosterOnlyName = ({ data, type }) => {
  const url = getUrlImage(200, data.poster_path) || imageDefault
  return (
    <div>
      <Link to={type === 'movie' ? `/movie/${data.id}` : (`/tv/${data.id}`)}>
        <div className="poster-only-name">
            <img src={url} heigth="150px" width="100px"></img>
            <div className="poster-only-name__info">
              <h4>{data.title || data.name}</h4>
              <h5>{data.release_date}</h5>
            </div>
        </div>
      </Link>
    </div>
  )
}
