import React, { useEffect, useState } from 'react'
import './styles.scss'
import imageSearcher from '../../images/searcher.jpg'
import { getUrlImage } from '../../utils/getUrlFromImages'
import { Search } from '../Search'
import api from '../../api'
export const Searcher = () => {
  const [loaded, setLoaded] = useState(false)
  const [url, setUrl] = useState('')
  useEffect(() => {
    async function getData () {
      const res = await api.discoverMovie()
      console.log(res.results)
      if (res) {
        try {
          const indexes = res.results.length - 1
          const random = Math.random()
          const number = parseInt(random * indexes)
          const urlRes = getUrlImage('original', res.results[number].backdrop_path)
          setUrl(urlRes)
          setLoaded(true)
        } catch {
          setLoaded(true)
        }
      }
    }
    getData()
  }, [])

  return (
    <div className="searcher">
      <div className="searcher__image">
        {loaded
          ? (<img width="100%" heigth="100%" src={!url ? (imageSearcher) : (url)}></img>)
          : ('')
        }
      </div>
      <div>
        <h3 className="searcher__h3">Bienvenidos</h3>
        <h3 className="searcher__h3">Millones de películas, programas de televisión. Explora ahora.</h3>
      </div>
      <Search/>
    </div>
  )
}
