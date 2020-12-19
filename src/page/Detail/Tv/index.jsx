import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'
import { Hero } from '../Common/Hero'
import { Poster } from '../Common/Poster'
import { Info } from '../Common/Info'
import '../Common/style.scss'

export const Detail = () => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    async function getData () {
      try {
        const res = await api.getDatailTv(id)
        setData(res)
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
            <div>
              <Hero path={data.backdrop_path}></Hero>
              <div className="wrapper-poster-info">
                <Poster id={data.id} img={data.poster_path} type='tv' watch = {true} ></Poster>
                <Info title={data.name} overview={data.overview} genres={data.genres} releaseDate={data.releaseDate} vote={data.vote_average}></Info>
              </div>
              <ListCast type={'tv'} id={data.id} />
            </div>
          )
      }
    </div>
  )
}
