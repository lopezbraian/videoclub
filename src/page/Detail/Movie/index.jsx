import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Hero } from '../Common/Hero'
import api from '../../../api/index'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'
import { Poster } from '../Common/Poster'
import { Info } from '../Common/Info'
import { Video } from './video'
import { WrapperDetail, WrapperPoster } from '../Common/Style'
import { Button } from '@material-ui/core'

export const Detail = ({ modeDark }) => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})
  const [openVideo, setOpenVideo] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    ref.current.addEventListener('click', closeVideo)
    async function getData () {
      try {
        const res = await api.getDatailMovie(id)
        if (res) {
          console.log(res)
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
    return () => {
      window.removeEventListener('click', closeVideo)
    }
  }, [])

  const closeVideo = () => {
    setOpenVideo(false)
  }

  const handleOpen = () => {
    setOpenVideo(true)
  }
  return (
    <WrapperDetail ref={ref} videoOn={openVideo}>
      {!loaded
        ? (
          <CirculesProgress/>
          )
        : (
            <>
              <Hero path={data.backdrop_path}></Hero>
              <WrapperPoster modeDark={modeDark}>
                <Poster id={data.id} img={data.poster_path} type='movie' watch = {true} ></Poster>
                <Info openVideo = {handleOpen} title={data.title} overview={data.overview} genres={data.genres} releaseDate={data.release_date} vote={data.vote_average}></Info>
                {openVideo && (<Video idVideo={data.id} type='movie'></Video>)}
              </WrapperPoster>
              <ListCast type={'movie'} id={data.id} />
            </>
          )
      }
    </WrapperDetail>
  )
}
