import React from 'react'
import useIsVisible from '../../hooks/useIsVisible'
import Similar from './SimilarWithLazy'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'

export default function SimilarWithLazy (props) {
  const { show, ref } = useIsVisible()
  return (
    <div ref={ref}>
      {show
        ? (
        <Similar {...props} ></Similar>
          )
        : (<PosterSkeleton></PosterSkeleton>) }
    </div>

  )
}
