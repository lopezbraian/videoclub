import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Poster } from '../../components/Poster'
import { WrapperDetail, H2 } from './style'

export default function Similar ({ type, id, modeDark }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData () {
      try {
        const resp = await api.getSimilar(type, id)
        if (resp) {
          console.log(resp)
          setData(resp.results)
          setLoading(false)
        } else {
          setLoading(false)
          return false
        }
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])
  return (
    <>
      <H2 modeDark = {modeDark}>Titulos Similares</H2>
      <WrapperDetail>
        {loading
          ? ('Cargando')
          : (
              data.map((d, index) => {
                return (
                  <Poster key={index} data={d} type={type}></Poster>
                )
              })
            )}
      </WrapperDetail>
    </>

  )
}
