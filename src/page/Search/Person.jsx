import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import imageDefault from '../../images/image_default.svg'
import './style-person.scss'

export const Person = ({ data }) => {
  const url = getUrlImage(200, data.profile_path) || imageDefault
  console.log(url)
  return (
    <div className="person">
      <img src={url} heigth="150px" width="100px"></img>
      <div className="person__info">
        <h4>{data.name}</h4>
        <p>
          <span>{data.known_for_department} • </span>
          {data.known_for.map((d, index) => {
            return (
              <span className="person__info__title" key={index}>
                {d.title}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
