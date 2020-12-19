import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import './style.scss'
import { Link } from 'react-router-dom'

export const Actor = ({ data }) => {
  return (
    <Link to = {`/person/${data.id}`} className="actor-card">
      <p className="actor-card__character">{data.character}</p>
      <div className="actor-card__img">
        <img src={data.profile_path ? getUrlImage(200, data.profile_path) : (imageDefault)}></img>
      </div>
      <p className="actor-card__name">
        {data.name} {data.total_episode_count && (` (EP ${data.total_episode_count})`)}
      </p>
    </Link>
  )
}
