import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import { WrapPoster } from '../../styles/Style-WrapPoster'
import TitleSection from '../TitleSection'

export const ListTv = () => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
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
      <TitleSection text={'Lo más popular en series'} />
      <WrapPoster>
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
      </WrapPoster>
    </div>
  )
}
