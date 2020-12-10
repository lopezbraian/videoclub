import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api'
import { ListCast } from '../../../components/ListCast'
import { Hero } from '../Components/Hero'
import { WrapperInfo } from '../Components/WrapperInfo'

export const Detail = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    async function getData () {
      const res = await api.getDatailTv(id)
      setData(res)
      console.log(res)
      setLoaded(true)
    }
    getData()
  }, [])

  return (
    <div className="wrapper-detail">
      {!loaded
        ? ('Cargando...')
        : (
            <>
              <Hero path={data.backdrop_path}></Hero>
              <WrapperInfo
                posterPath = {data.poster_path}
                id = {data.id}
                title = {data.title || data.original_name}
                overview = {data.overview}
                genres = {data.genres}
                type = 'tv'
                releaseDate = {data.release_date}
              />
              <ListCast type={'tv'} id={data.id} />
            </>
          )
      }
    </div>
  )
}
