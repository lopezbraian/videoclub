import { useState, useEffect } from 'react'
import api from '../api'

export default function useGetVideo (type) {
  const [idVideoYT, setIdVideoYT] = useState(false)
  const [idVideo, setIdVideo] = useState(false)

  useEffect(() => {
    async function getVideoTrailer () {
      try {
        const dataResp = await api.getVideo(type, idVideo)
        if (dataResp.results.lenght === 0) {
          return false
        }
        if (dataResp.results[0].key && (dataResp.results[0].site === 'YouTube')) { setIdVideoYT(dataResp.results[0].key) }
      } catch (err) {
        return false
      }
    }
    if (idVideo) {
      getVideoTrailer()
    }
  }, [idVideo, type])

  return [idVideoYT, setIdVideo]
}
