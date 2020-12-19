import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Actor } from '../Actor'
import './style.scss'

export const ListCast = ({ type, id }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
      let result
      if (type === 'movie') {
        result = await api.getCastMovie(id)
      } else {
        result = await api.getCastTv(id)
      }
      if (result) setData(result.cast)
    }
    getData()
  }, [])
  return (
    <>
      <h2 style={{ textAlign: 'left', fontSize: '3.5rem', margin: '0', marginTop: '15px' }}>Elenco (10 de {data.length + 1})
        <span style={{ display: 'block', fontSize: '1.5rem', color: 'lightGreen' }}>Ver todos</span>
      </h2>
      <div className="actor-wrapper">
        {data.slice(0, 10).map((d, index) => (<Actor key={index} data={d} />))}
      </div>
    </>
  )
}
