import React from 'react'
import { WrapperFilterList, Wrapper } from './style-filter'

export const Filter = ({ modeDark, types, setSelectType, selectType }) => {
  function handleChange (type) {
    setSelectType(type)
  }
  function isSelected (type) {
    if (selectType === type) {
      return {
        color: modeDark ? 'white' : 'black'
      }
    } else {
      return {}
    }
  }
  return (
    <Wrapper modeDark={modeDark}>
      <h3>Resultados de la búsqueda</h3>
      <WrapperFilterList modeDark={modeDark}>
        <ul>
          <li onClick={() => { handleChange('movie') }} style={isSelected('movie')}>Películas <span>{types.movie}</span></li>
          <li onClick={() => { handleChange('tv') }} style={isSelected('tv')}>Series <span>{types.tv}</span></li>
          <li onClick={() => { handleChange('person') }} style={isSelected('person')}>Personas <span>{types.person}</span></li>
        </ul>
      </WrapperFilterList>
    </Wrapper>
  )
}
