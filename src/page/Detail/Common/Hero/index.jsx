import React, { useEffect, useState } from 'react'
import { getUrlImage } from '../../../../utils/getUrlFromImages'
import { WrapperPoster, ImageHero } from './style'
import useGetVideo from '../../../../hooks/useGetVideo'
import { Video } from '../../../../components/Video'
import { Poster } from '../Poster'
import { Info } from '../Info'

export const Hero = ({ data, modeDark, type, refElement }) => {
  const [openVideo, setopenVideo] = useState(false)
  const imgSrcHero = getUrlImage('original', data.backdrop_path)

  const [idVideoYT, setIdVideo] = useGetVideo(type)

  useEffect(() => {
    refElement.current.addEventListener('click', closeVideo)
    setIdVideo(data.id)
    return () => window.removeEventListener('click', closeVideo)
  }, [data.id])

  const closeVideo = () => {
    setopenVideo(false)
  }

  const handleOpen = () => {
    setopenVideo(true)
  }

  return (
    <WrapperPoster modeDark={modeDark}>
      <ImageHero imgSrcHero = {imgSrcHero}></ImageHero>
        <Poster id={data.id} img={data.poster_path} type={type} watch = {true} ></Poster>
        <Info
          modeDark={modeDark}
          idVideo = {idVideoYT}
          openVideo = {handleOpen}
          title={data.title}
          overview={data.overview}
          genres={data.genres}
          releaseDate={data.release_date}
          vote={data.vote_average}>
        </Info>
        {openVideo && (<Video closeVideo={closeVideo} idVideo={idVideoYT} ></Video>)}
    </WrapperPoster>
  )
}
