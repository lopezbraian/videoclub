import React, { useEffect, useState } from 'react'
import api from '../../api'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import { WrapperList } from '../WrapperList'
import { H2 } from './style'

export default function Similar ({ type, id, modeDark }) {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function getData () {
      try {
        const resp = await api.getSimilar(type, id)
        if (resp) {
          setData(resp.results)
          setLoaded(true)
        } else {
          return false
        }
      } catch (error) {
      }
    }

    getData()
  }, [type, id])

  if (data.length === 0) {
    return null
  }

  console.log(type, id)
  return (
    <>
      <H2 modeDark = {modeDark}>Titulos Similares</H2>
        {loaded
          ? (
            <WrapperList data={data} type={type}></WrapperList>
            )
          : (
              <PosterSkeleton>  </PosterSkeleton>
            )}
    </>

  )
}
