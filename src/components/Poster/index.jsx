import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import { Vote } from '../Vote'
import { Link } from 'react-router-dom'
import './style.scss'
export const Poster = ({ data, type }) => {
  return (
      <div className="poster">
        <div className="poster__image">
          <Link to={type === 'movie' ? `/movie/${data.id}` : `/tv/${data.id}` }>
            <img className="poster__image__img" width="150px" height="200px" src={getUrlImage(200, data.poster_path)}></img>
            <div className="poster__image__vote">
              <Vote vote={data.vote_average}/>
            </div>
          </Link>
        </div>
        <div className="poster__title">
          <p className="poster__title__name">{data.title || data.name}</p>
          {type === 'tv' && (
            <p className="poster__title__date">Primer episodio</p>
          )}
          <p className="poster__title__date">{data.release_date || data.first_air_date}</p>
        </div>
      </div>
  )
}
