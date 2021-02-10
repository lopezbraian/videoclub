import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../api'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'
import { Hero } from '../Common/Hero'
import { Poster } from '../Common/Poster'
import { Info } from '../Common/Info'
import { WrapperPoster, WrapperDetail } from '../Common/Style'
import { Video } from '../Movie/video'
import { Button } from '@material-ui/core'

export const Detail = ({ modeDark }) => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [openVideo, setOpenVideo] = useState(false)
  const [data, setData] = useState({})
  const ref = useRef(null)
  const ref2 = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    ref.current.addEventListener('click', closeVideo)
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

  const closeVideo = () => {
    setOpenVideo(false)
  }

  const handleOpen = () => {
    setOpenVideo(true)
  }
  return (
    <WrapperDetail ref={ref}>
      {!loaded
        ? (
          <CirculesProgress/>
          )
        : (
            <>
              <Hero path={data.backdrop_path}></Hero>
              <WrapperPoster modeDark={modeDark}>
                <Poster id={data.id} img={data.poster_path} type='tv' watch = {true} ></Poster>
                <Info openVideo = {handleOpen} title={data.name} overview={data.overview} genres={data.genres} releaseDate={data.release_date} vote={data.vote_average}></Info>
                {openVideo && (<Video idVideo={data.id} type='tv'></Video>)}
              </WrapperPoster>
              <ListCast type={'tv'} id={data.id} />
            </>
          )
      }
    </WrapperDetail>
  )
}
