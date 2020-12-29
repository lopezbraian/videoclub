import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Item } from './Item'

export const ListTvMovie = ({ id, modeDark }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
      try {
        const result = await api.getPersonCredits(id)
        const bestMovies = result.cast.filter((item) => item.vote_average > 6.0)
        setData(bestMovies.slice(0, 10))
      } catch {

      }
    }
    getData()
  }, [])
  return (
    <div style={{ display: 'flex', overflowX: 'scroll', padding: '20px 0' }}>
      {data.map((d, index) => {
        return (
          <Item modeDark={modeDark} key={index} data={d} type={d.media_type}/>
        )
      })}
    </div>
  )
}
