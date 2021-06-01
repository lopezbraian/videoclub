import React, { useEffect, useState } from 'react'
import api from '../../api'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import TitleSection from '../TitleSection'
import { WrapperList } from '../WrapperList'

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
        {
          loaded
            ? (
                <WrapperList data={data} type={'tv'}></WrapperList>
              )
            : (
              <PosterSkeleton />
              )
        }
    </div>
  )
}
