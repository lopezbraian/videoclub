import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import { Link } from 'react-router-dom'
import { Wrapper, WrapperInfo } from './style'

export const PosterOnlyName = ({ data, type, modeDark }) => {
  const url = getUrlImage(500, data.poster_path)
  if (!url) {
    return null
  }
  return (
    <Link style={{ textDecoration: 'none', borderRadius: '5px', overflow: 'hidden' }} to={type === 'movie' ? `/movie/${data.id}` : (`/tv/${data.id}`)}>
      <Wrapper>
          <img src={url} width='300px'></img>
          <WrapperInfo modeDark={modeDark}>
            <h4>{data.title || data.name}</h4>
            <h5>{data.release_date}</h5>
          </WrapperInfo>
      </Wrapper>
    </Link>
  )
}
