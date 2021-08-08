import React, { useEffect, useState , useContext } from 'react'
import api from '../../../api'
import { useParams } from 'react-router-dom'
import { Info } from './Info'
import { Poster } from '../Common/Poster'
import { ListTvMovie } from '../../../components/ListTvMovie'
import { H4, Wrapper, WrapperInfo, WrapperLeft, WrapperRigth } from './style'
import { InfoItem } from './Info-item'
import {UiContext} from '../../../context'

export const PersonDetail = () => {
  const {modeDark} = useContext(UiContext)
  const { id } = useParams()
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    async function getData () {
      try {
        const result = await api.getPerson(id)
        if (!result) return false
        setData(result)
        setLoaded(true)
      } catch {
      }
    }
    getData()
  }, [])
  return (
    <>
      {
        loaded
          ? (
            <Wrapper modeDark={modeDark}>
              <WrapperLeft>
                <Poster id={data.id} img={data.profile_path} />
                <WrapperInfo>
                  <H4>Información personal</H4>
                  <InfoItem title={'Cumpleaños'} content={data.birthday}/>
                  <InfoItem title={'Lugar Nacimiento'} content={data.place_of_birth}/>
                  <InfoItem title={'Conocido por'} content={data.known_for_department}/>
                </WrapperInfo>
              </WrapperLeft>
              <WrapperRigth>
                <Info name={data.name} bio={data.biography} knowFor={data.known_for_department} placeOfBirth={data.place_of_birth} birthday={data.birthday} />
                <div style={{ padding: '5px' }}>
                  <H4>Conocido por</H4>
                  <ListTvMovie modeDark={modeDark} id={data.id}/>
                </div>
              </WrapperRigth>
            </Wrapper>
            )
          : ('...cargando')
      }

    </>
  )
}
