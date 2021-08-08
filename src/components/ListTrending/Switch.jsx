import React, { useState , useContext } from 'react'
import { UiContext } from '../../context'
import { LiSelect, Ul, Li } from './Style-Switch'

export default function SwitchPres ({ select, option }) {
  const {modeDark} = useContext(UiContext)
  const [activate, setActivate] = useState(0)
  const translate = (text) => {
    let result
    switch (text) {
      case 'tv':
        result = 'Series'
        break
      case 'movie':
        result = 'Peliculas'
        break
      case 'all':
        result = 'Todo'
        break
      case 'day':
        result = 'Hoy'
        break
      case 'week':
        result = 'Semana'
        break
      default :
        result = text
    }
    return result
  }
  function click (index) {
    setActivate(index)
    select(option[index])
  }
  function renderLi (index, e) {
    if (activate === index) {
      return (
        <LiSelect modeDark={modeDark} key={index} onClick={() => { click(index) }}>{translate(e)}</LiSelect>
      )
    } else {
      return (
        <Li modeDark={modeDark} key={index} onClick={() => { click(index) }} >{translate(e)}</Li>
      )
    }
  }
  return (
    <Ul modeDark={modeDark}>
      {option.map((e, index) => renderLi(index, e))}
    </Ul>
  )
}

