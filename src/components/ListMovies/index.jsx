import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import { WrapPoster } from '../../styles/Style-WrapPoster'
import TitleSection from '../TitleSection'
import { useScroll } from '../../hooks/useScroll'

export const ListMovies = () => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])
  const [scroll, setScroll] = useScroll()

  function handleScroll (e) {
    setScroll(e.target)
  }
  useEffect(() => {
    async function getData () {
      const res = await api.queryMoviePopular()
      if (!res) return false
      setData(res.results)
      setLoaded(true)
    }
    getData()
  }, [])
  return (
    <div>
      <TitleSection text={'Lo más popular en peliculas'} />
      <WrapPoster onScroll={handleScroll} scroll={scroll}>
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
