import React from 'react'
import './style-info.scss'

export const Info = ({ name, bio = '' }) => {
  return (
    <div className="info-actor">
      <h3>{name}</h3>
      <div className="info-actor__bio">
        <h4>Biografía</h4>
        <p>{bio.slice(0, 400) || (`No tenemos una biografía sobre ${name}`)}</p>
      </div>
    </div>
  )
}
