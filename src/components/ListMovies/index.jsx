import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Selector } from './selector'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import './style.scss'

export const ListMovies = ({ type }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
      setLoading(true)
      let res = []
      if (type === 'movie') {
        res = await api.queryMoviePopular()
      } else {
        res = await api.queryTvPopular()
      }
      setData(res.results)
      setLoading(false)
    }
    getData()
  }, [])
  return (
    <div>
      <Selector option={type === 'movie' ? ('en peliculas') : ('en series')}/>
      <div className="wrap-poster">
        {
        !loading
          ? (
              data.map((data, index) => {
                return (
                <Poster key={index} data = {data} type={type}></Poster>
                )
              })
            )
          : (
            <PosterSkeleton/>
            )
        }
      </div>
    </div>
  )
}
