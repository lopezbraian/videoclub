import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Hero } from '../Common/Hero'
import api from '../../../api/index'
import { ListCast } from '../../../components/ListCast'
import { CirculesProgress } from '../../../components/Loading'
import { WrapperDetail } from './style'
import Similar from '../../../components/Similar'

export const Detail = ({ modeDark }) => {
  const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState({})
  console.log(data)
  useEffect(() => {
    window.scrollTo(0, 0)
    async function getData () {
      try {
        const res = await api.getDatailMovie(id)
        if (res) {
          setData(res)
          setLoaded(true)
        } else {
          window.location.replace('/404')
        }
      } catch {
        return false
      }
    }
    getData()
  }, [id])

  return (
    <WrapperDetail>
      {!loaded
        ? (
          <CirculesProgress/>
          )
        : (
          <>
            <Hero data ={data} modeDark = {modeDark} type ='movie'></Hero>
            <ListCast type={'movie'} id={data.id} />
            <Similar type='movie' id={data.id} modeDark = {modeDark}></Similar>
          </>
          )
      }
    </WrapperDetail>
  )
}
