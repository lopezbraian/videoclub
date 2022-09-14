import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import { Link } from 'react-router-dom'
import { WrapperInfo, Wrapper } from './style-item'

export const Item = ({ data, type, modeDark }) => {
  const url = getUrlImage(200, data.poster_path) || imageDefault
  return (
    <Link style={{ textDecoration: 'none' }} to={type === 'movie' ? `/movie/${data.id}` : (`/tv/${data.id}`)}>
      <Wrapper>
          <img src={url} height="250px" width="250px"/>
          <WrapperInfo modeDark ={modeDark} >
            <p>{data.title || data.name}</p>
          </WrapperInfo>
      </Wrapper>
    </Link>
  )
}
