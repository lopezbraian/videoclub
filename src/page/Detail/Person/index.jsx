import React, { useEffect, useState } from 'react'
import api from '../../../api'
import { useParams } from 'react-router-dom'
import { Info } from './Info'
import { Poster } from '../Common/Poster'
import { ListTvMovie } from '../../../components/ListTvMovie'
import './style.scss'
import { InfoItem } from './Info-item'

export const PersonDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    async function getData () {
      const result = await api.getPerson(id)
      console.log(result)
      setData(result)
      setLoaded(true)
    }
    getData()
  }, [])
  return (
    <div>
      {
        loaded
          ? (
            <div className="wrapper-detail-person">
              <div className="wrapper-detail-person__left">
                <Poster id={data.id} img={data.profile_path} />
                <div className="wrapper-detail-person__left__info">
                  <h4 className="poster-info-h4">Información personal</h4>
                  <InfoItem title={'Cumpleaños'} content={data.birthday}/>
                  <InfoItem title={'Lugar Nacimiento'} content={data.place_of_birth}/>
                  <InfoItem title={'Conocido por'} content={data.known_for_department}/>
                </div>
              </div>
              <div className="wrapper-detail-person__right">
                <Info name={data.name} bio={data.biography} knowFor={data.known_for_department} placeOfBirth={data.place_of_birth} birthday={data.birthday} />
                <div className="wrapper-listMovieTv">
                  <h4 className="poster-info-h4">Conocido por</h4>
                  <ListTvMovie id={data.id}/>
                </div>
              </div>
            </div>
            )
          : ('...cargando')
      }

    </div>
  )
}
