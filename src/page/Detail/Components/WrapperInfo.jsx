import React from 'react'
import { Poster } from './Poster'
import { Info } from './Info'
import './style-wrapper-info.scss'

export const WrapperInfo = ({ posterPath, id, title, overview, genres, type, releaseDate }) => {
  return (
    <div className="wrapper-poster-info">
      <Poster img={posterPath} id = {id} type = {type}></Poster>
      <Info title={title} overview={overview} genres={genres} releaseDate={releaseDate}></Info>
  </div>
  )
}
