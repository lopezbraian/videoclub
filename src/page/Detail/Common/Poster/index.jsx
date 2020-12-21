import React from 'react'
import { getUrlImage } from '../../../../utils/getUrlFromImages'
import { ProvWatch } from '../../../../components/ProvWatch'
import './style-poster.scss'

export const Poster = ({ id, img, type, watch = false }) => {
  const srcImage = getUrlImage(500, img)
  return (
    <div className="poster-detail">
      {
      srcImage
        ? (<img loading="lazy" src={getUrlImage(500, img)}></img>)
        : ('')
      }
      {watch && (
        <div className="poster-detail__prove">
          <ProvWatch id={id} type = {type}/>
        </div>
      )}
    </div>
  )
}
