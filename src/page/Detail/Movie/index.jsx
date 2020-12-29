import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Hero } from '../Common/Hero'
import api from '../../../api/index'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'
import { Poster } from '../Common/Poster'
import { Info } from '../Common/Info'
import { WrapperDetail, WrapperPoster } from '../Common/Style'

export const Detail = ({ modeDark }) => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
    async function getData () {
      try {
        const res = await api.getDatailMovie(id)
        if (res) {
          setData(res)
          setLoaded(true)
        } else {
          window.location.replace('/404')
        }
      } catch {
        return false
      }
    }
    getData()
  }, [])
  return (
    <WrapperDetail>
      {!loaded
        ? (
          <CirculesProgress/>
          )
        : (
            <>
              <Hero path={data.backdrop_path}></Hero>
              <WrapperPoster modeDark={modeDark}>
                <Poster id={data.id} img={data.poster_path} type='movie' watch = {true} ></Poster>
                <Info title={data.title} overview={data.overview} genres={data.genres} releaseDate={data.releaseDate} vote={data.vote_average}></Info>
              </WrapperPoster>
              <ListCast type={'movie'} id={data.id} />
            </>
          )
      }
    </WrapperDetail>
  )
}
