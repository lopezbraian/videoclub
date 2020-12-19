import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Item } from './Item'
import './style.scss'
export const ListTvMovie = ({ id }) => {
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
    <div className="listTvMovie">
      {data.map((d, index) => {
        return (
          <Item key={index} data={d} type={d.media_type}/>
        )
      })}
    </div>
  )
}
