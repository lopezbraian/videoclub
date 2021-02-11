import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import { Link } from 'react-router-dom'
import { WrapperImage, WrapperActor, P } from './style'

export const Actor = ({ data, modeDark }) => {
  function rol () {
    let rol = ''
    if (data.roles && data.roles.length > 0) {
      rol = data.roles[0].character
    } else if (data.character) {
      rol = data.character
    }
    return rol
  }
  return (
    <WrapperActor >
      <Link style={{ textDecoration: 'none' }} to = {`/person/${data.id}`}>
        <P modeDark={modeDark} style={{ marginBottom: '10px' }}>
          {rol()}
        </P>
        <WrapperImage>
          <img alt="actor" src={data.profile_path ? getUrlImage(200, data.profile_path) : (imageDefault)}></img>
        </WrapperImage>
        <P modeDark={modeDark} style={{ marginTop: '10px' }}>
          {data.name} {data.total_episode_count && (` (EP ${data.total_episode_count})`)}
        </P>
      </Link>
    </WrapperActor>
  )
}
