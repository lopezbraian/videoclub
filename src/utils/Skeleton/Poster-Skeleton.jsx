import React from 'react'
import { Vote } from '../../components/Poster/Vote'
import imageDefault from '../../../public/images/image_default.svg'
import './style-poster-skeleton.scss'
export const PosterSkeleton = () => {
  const data = {
    title: 'Loading...',
    release_date: 'Loading...',
    path_fake: imageDefault,
    vote_average: 10
  }
  return (
    <div className="wrap-poster-skeleton">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
        return (
          <div key={index} className="poster-skeleton">
            <div className="poster-skeleton__image">
              <img className="poster-skeleton__image__img" width="150px" height="200px" src={data.path_fake}></img>
              <div className="poster-skeleton__image__vote">
                <Vote />
              </div>
            </div>
            <div className="poster-skeleton__title">
              <p className="poster-skeleton__title__name"></p>
              <p className="poster-skeleton__title__date"></p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
