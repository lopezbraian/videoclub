import React from 'react'
import { getUrlImage } from '../../../../utils/getUrlFromImages'
import { ProvWatch } from '../../../../components/ProvWatch'
import './style-poster.scss'

export const Poster = ({ id, img, type, watch = false }) => {
  return (
    <div className="poster-detail">
      <img src={getUrlImage(500, img)} />
      {watch && (
        <div className="poster-detail__prove">
          <ProvWatch id={id} type = {type}/>
        </div>
      )}
    </div>
  )
}
