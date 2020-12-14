import React from 'react'
import './style-filter.scss'

export const Filter = ({ types, setSelectType, selectType }) => {
  function handleChange (type) {
    setSelectType(type)
  }
  function isSelected (type) {
    if (selectType === type) {
      return {
        color: 'black'
      }
    } else {
      return {}
    }
  }
  return (
    <div className="filter">
      <h3 className="filter__h3">Resultado de la busqueda</h3>
      <div className="filter-list">
        <ul>
          <li onClick={() => { handleChange('movie') }} style={isSelected('movie')}>Peliculas <span>{types.movie}</span></li>
          <li onClick={() => { handleChange('tv') }} style={isSelected('tv')}>Series <span>{types.tv}</span></li>
          <li onClick={() => { handleChange('person') }} style={isSelected('person')}>Personas <span>{types.person}</span></li>
        </ul>
      </div>
    </div>
  )
}
