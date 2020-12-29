import React, { useState } from 'react'
import { connect } from 'react-redux'
import { LiSelect, Ul, Li, WrapperSwitch } from './Style-Switch'
function SwitchPres ({ select, option, modeDark }) {
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
const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}
export const Switch = connect(mapStateToProps)(SwitchPres)
