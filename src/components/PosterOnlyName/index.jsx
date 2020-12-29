import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import { Link } from 'react-router-dom'
import { Wrapper, WrapperInfo } from './style'

export const PosterOnlyName = ({ data, type, modeDark }) => {
  const url = getUrlImage(200, data.poster_path) || imageDefault
  return (
    <div>
      <Link style={{ textDecoration: 'none' }} to={type === 'movie' ? `/movie/${data.id}` : (`/tv/${data.id}`)}>
        <Wrapper>
            <img src={url} heigth="150px" width="100px"></img>
            <WrapperInfo modeDark={modeDark}>
              <h4>{data.title || data.name}</h4>
              <h5>{data.release_date}</h5>
            </WrapperInfo>
        </Wrapper>
      </Link>
    </div>
  )
}
