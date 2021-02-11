import React from 'react'

import useIsVisible from '../../hooks/useIsVisible'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'

import {ListTv} from './ListTv'

export default function  ListTvLazyLoad () {
  const {show , ref} = useIsVisible()

  return (
    <div ref={ref}>
      {show ? <ListTv></ListTv> : <PosterSkeleton></PosterSkeleton>}
    </div>
  )
}
