import React, { useEffect, useState } from 'react'
import api from '../../api/index'
import { getUrlImage } from '../../utils/getUrlFromImages'
import './style.scss'
export const ProvWatch = ({ id, type }) => {
  const [loaded, setLoaded] = useState(false)
  const [provWatch, setProvWatch] = useState({
    flatrate: []
  })

  useEffect(() => {
    async function getData () {
      let provWatchRes
      try {
        if (type === 'movie') {
          provWatchRes = await api.GetWatchProvidersMovie(id)
        } else {
          provWatchRes = await api.GetWatchProvidersTv(id)
        }
        if (provWatchRes.results.AR) {
          setProvWatch(provWatchRes.results.AR)
        }
        setLoaded(true)
      } catch {
        return false
      }
    }
    getData()
  }, [])
  return (
    <>
      {!loaded
        ? ('Loading...')
        : (
            provWatch.flatrate && (
            <div className="prov-watch-wrapper">
              {provWatch.flatrate.map((d, index) => {
                return (
                  <div className="prov-watch" key={index}>
                    <img width="35px" height="35px" src={getUrlImage(200, d.logo_path)}></img>
                    <p >{d.provider_name}</p>
                  </div>
                )
              })}
            </div>
            )
          )
      }
      </>
  )
}
