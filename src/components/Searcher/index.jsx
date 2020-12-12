import React, { useState } from 'react'
import api from '../../api'
import './styles.scss'
import imageSearcher from '../../../public/images/9ijMGlJKqcslswWUzTEwScm82Gs.jpg'
export const Searcher = () => {
  const [query, setQuery] = useState('')
  const handleInput = (event) => {
    setQuery(event.target.value)
  }
  const search = async () => {
    if (query.length > 3) {
      const response = await api.querySearch(query)
      console.log(response)
    } else {
      return 0
    }
  }
  return (
    <div className="searcher">
      <div className="searcher__image">
        <img src={imageSearcher}></img>

      </div>
      <div>
        <h3 className="searcher__h3">Bienvenidos</h3>
        <h3 className="searcher__h3">Millones de películas, programas de televisión. Explora ahora.</h3>
      </div>
      <div className="input-group">
        <input value={query} onChange={handleInput} placeholder="Buscar por nombre"></input>
        <button onClick= {search}>Buscar</button>
      </div>
    </div>
  )
}
