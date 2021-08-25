import React, { useEffect, useState } from 'react'
import api from '../../api'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import TitleSection from '../TitleSection'
import { WrapperList } from '../WrapperList'

export const ListMovies = () => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
      try {
        const res = await api.queryMoviePopular()
        if (!res) return false
        setData(res.results)
        console.log(res)
        setLoaded(true)
      } catch (error) {

      }
    }
    getData()
  }, [])
  return (
    <div>
      <TitleSection text={'Lo más popular en peliculas'} />
        {
          loaded
            ? (
              <WrapperList data={data} type={'movie'}></WrapperList>
              )
            : (
              <PosterSkeleton />
              )
            }
    </div>
  )
}
