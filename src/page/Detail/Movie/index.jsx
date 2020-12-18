import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Hero } from '../Components/Hero'
import api from '../../../api/index'
import { WrapperInfo } from '../Components/WrapperInfo'
import './style.scss'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'

export const Detail = (props) => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})
  useEffect(() => {
    async function getData () {
      try {
        const res = await api.getDatailMovie(id)
        if (res) { setData(res) }
        setLoaded(true)
      } catch {
        return false
      }
    }
    getData()
  }, [])
  return (
    <div className="wrapper-detail wrapper-padding">
      {!loaded
        ? (
          <CirculesProgress/>
          )
        : (
            <>
              <Hero path={data.backdrop_path}></Hero>
              <WrapperInfo
                posterPath = {data.poster_path}
                id = {data.id}
                title = {data.title}
                overview = {data.overview}
                genres = {data.genres}
                type = 'movie'
                vote = {data.vote_average}
                releaseDate = {data.release_date}
              />
              <ListCast type={'movie'} id={data.id} />
            </>
          )
      }
    </div>
  )
}
