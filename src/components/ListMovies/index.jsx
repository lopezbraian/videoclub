import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import { WrapPoster } from '../../styles/Style-WrapPoster'
import TitleSection from '../TitleSection'
export const ListMovies = () => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
      const res = await api.queryMoviePopular()
      setData(res.results)
      setLoaded(true)
    }
    getData()
  }, [])
  return (
    <div>
      <TitleSection text={'Lo más popular en peliculas'} />
      <WrapPoster>
        {
          loaded
            ? (
                data.map((data, index) => {
                  return (
                  <Poster key={index} data={data} type={'movie'}></Poster>
                  )
                })
              )
            : (
              <PosterSkeleton />
              )
        }
      </WrapPoster>
    </div>
  )
}
