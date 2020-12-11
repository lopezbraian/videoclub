import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import '../../styles/style-list-populate.scss'
import './style.scss'

export const ListTrendig = () => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])
  const [time, setTime] = useState('day')
  const [type, setType] = useState('all')
  useEffect(() => {
    async function getData () {
      const res = await api.getTrending(type, time)
      setData(res.results)
      setLoaded(true)
    }
    getData()
  }, [type, time])
  return (
    <div>
      <div className="selector">
        <h2>Top en {type === 'all' ? 'Todo' : type === 'movie' ? 'Peliculas' : 'Series'}</h2>
      </div>
      <div className="switch-wrapper">
        <SwitchType setType= {setType} option ={['todo', 'series', 'peliculas']} />
        <SwitchTime setTime= {setTime} option ={['dia', 'semana']} />
      </div>
      <div className="wrap-poster">
        {
          loaded
            ? (
                data.map((data, index) => {
                  return (
                  <Poster key={index} data={data} type={data.media_type}></Poster>
                  )
                })
              )
            : (
              <PosterSkeleton />
              )
        }
      </div>
    </div>
  )
}

function SwitchType ({ setType, option }) {
  const [activate, setActivate] = useState(0)
  function click (index) {
    setActivate(index)
    if (index === 0) {
      setType('all')
    } else if (index === 1) {
      setType('tv')
    } else {
      setType('movie')
    }
  }
  function renderLi (index, e) {
    if (activate === index) {
      return (
        <li onClick={() => { click(index) }} style={{ backgroundColor: '#032541', color: 'white' }}>{e}</li>
      )
    } else {
      return (
        <li onClick={() => { click(index) }} >{e}</li>
      )
    }
  }
  return (
      <ul className="switch-wrapper__ul">
        {option.map((e, index) => renderLi(index, e))}
      </ul>
  )
}
function SwitchTime ({ setTime, option }) {
  const [activate, setActivate] = useState(0)
  function click (index) {
    setActivate(index)
    if (index === 0) {
      setTime('day')
    } else {
      setTime('week')
    }
  }
  function renderLi (index, e) {
    if (activate === index) {
      return (
        <li onClick={() => { click(index) }} style={{ backgroundColor: '#032541', color: 'white' }}>{e}</li>
      )
    } else {
      return (
        <li onClick={() => { click(index) }} >{e}</li>
      )
    }
  }
  return (
      <ul className="switch-wrapper__ul">
        {option.map((e, index) => renderLi(index, e))}
      </ul>
  )
}
