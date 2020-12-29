import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../Poster'
import { PosterSkeleton } from '../../utils/Skeleton/Poster-Skeleton'
import TitleSection from '../TitleSection'
import { WrapPoster } from '../../styles/Style-WrapPoster'
import { Switch } from './Switch'
import { WrapperSwitch } from './Style-ListTrending'

export const ListTrendig = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [time, setTime] = useState('day')
  const [type, setType] = useState('all')

  useEffect(() => {
    async function getData () {
      try {
        setLoading(true)
        const res = await api.getTrending(type, time)
        setData(res.results)
        setLoading(false)
      } catch {
      }
    }
    getData()
  }, [type, time])
  return (
    <>
      <TitleSection text = { `Top en ${type === 'all' ? 'series y peliculas' : type === 'movie' ? 'Peliculas' : 'Series'}` }/>
      <WrapperSwitch>
        <Switch select={setType} option ={['all', 'tv', 'movie']} />
        <Switch select= {setTime} option ={['day', 'week']} />
      </WrapperSwitch>
      <WrapPoster>
        {
          !loading
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
      </WrapPoster>
    </>
  )
}
