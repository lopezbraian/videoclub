import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import { Link } from 'react-router-dom'
import { WrapperImage, WrapperActor, P } from './style'

export const Actor = ({ data, modeDark }) => {
  return (
    <WrapperActor >
      <Link to = {`/person/${data.id}`}>
        <P modeDark={modeDark} style={{ marginBottom: '10px' }}>
          {data.character
            ? data.character
            : ''}
        </P>
        <WrapperImage>
          <img src={data.profile_path ? getUrlImage(200, data.profile_path) : (imageDefault)}></img>
        </WrapperImage>
        <P modeDark={modeDark} style={{ marginTop: '10px' }}>
          {data.name} {data.total_episode_count && (` (EP ${data.total_episode_count})`)}
        </P>
      </Link>
    </WrapperActor>
  )
}
