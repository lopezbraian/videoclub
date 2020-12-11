import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import '../../styles/style-list-populate.scss'


export const ListTv = () => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.queryTvPopular()
        setData(res.results)
        setLoaded(true)
      } catch {

      }
    }
    getData()
  }, [])
  return (
    <div>
      <div className="selector">
        <h2>Lo más popular en series</h2>
      </div>
      <div className="wrap-poster">
        {
          loaded
            ? (
              data.map((data, index) => {
                return (
                  <Poster key={index} data={data} type={'tv'}></Poster>
                )
              })
            )
            : (
              <PosterSkeleton />
            )
        }
      </div>
    </div>
  )
}
