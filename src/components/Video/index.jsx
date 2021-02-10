import React, { useEffect, useState } from 'react'
import api from '../../api'
import YouTube from 'react-youtube'
import { Wrapper } from './style-video'

export const Video = ({ idVideo, type, closeVideo }) => {
  const [idVideoYT, setidVideoYT] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
  useEffect(() => {
    async function getData () {
      try {
        const dataResp = await api.getVideo(type, idVideo)
        if (dataResp.results.lenght === 0) {
          setError(true)
          setLoading(false)
          return false
        }
        if (dataResp.results[0].key && (dataResp.results[0].site === 'YouTube')) { setidVideoYT(dataResp.results[0].key) }
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
        return false
      }
    }
    getData()
  }, [])

  const onReady = (event) => {
    event.target.pauseVideo()
  }

  return (
    <Wrapper>
        {loading
          ? (<span>Cargando...</span>
            )
          : !error
              ? (
                  <YouTube videoId={idVideoYT} opts={opts} onReady={onReady} onEnd={closeVideo}></YouTube>
                )
              : (
                  <span>No hay trailer disponible</span>
                )
        }

    </Wrapper>
  )
}
