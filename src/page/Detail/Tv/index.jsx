import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'
import { Hero } from '../Common/Hero'
import { Poster } from '../Common/Poster'
import { Info } from '../Common/Info'
import { WrapperPoster, WrapperDetail } from '../Common/Style'

export const Detail = ({ modeDark }) => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    async function getData () {
      try {
        const res = await api.getDatailTv(id)
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
                <Poster id={data.id} img={data.poster_path} type='tv' watch = {true} ></Poster>
                <Info title={data.name} overview={data.overview} genres={data.genres} releaseDate={data.release_date} vote={data.vote_average}></Info>
              </WrapperPoster>
              <ListCast type={'tv'} id={data.id} />
            </>
          )
      }
    </WrapperDetail>
  )
}
