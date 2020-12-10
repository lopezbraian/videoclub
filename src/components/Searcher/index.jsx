import React, { useState } from 'react'
import api from '../../api'
import './styles.scss'
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
      <div className="input-group">
        <input value={query} onChange={handleInput} placeholder="Buscar por nombre"></input>
        <button onClick= {search}>Buscar</button>
      </div>
    </div>
  )
}
