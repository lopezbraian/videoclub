import React, { useEffect, useState } from 'react'
import api from '../../../api'
import YouTube from 'react-youtube'
import { Wrapper } from './style-video'

export const Video = ({ idVideo, type }) => {
  const [idVideoYT, setidVideoYT] = useState(null)
  const [loading, setLoading] = useState(true)

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
  useEffect(() => {
    async function getData () {
      const dataResp = await api.getVideo(type, idVideo)
      console.log(dataResp)
      if (!dataResp) {
        return null
      }
      if (dataResp.results[0].key && (dataResp.results[0].site === 'YouTube')) { setidVideoYT(dataResp.results[0].key) }

      setLoading(false)
    }
    getData()
  }, [])

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return (
    <Wrapper >
        {loading
          ? (<span>Cargando...</span>
            )
          : (
              <YouTube videoId={idVideoYT} opts={opts} onReady={onReady}></YouTube>
            )
        }

    </Wrapper>
  )
}
