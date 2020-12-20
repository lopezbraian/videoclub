import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'

export const Search = ({ initialValue }) => {
  const [query, setQuery] = useState(initialValue)
  const history = useHistory()
  const handleInput = (event) => {
    setQuery(event.target.value)
  }
  const search = async () => {
    if (query.length > 3) {
      history.push(`/search?query=${query}`)
    }
  }
  const keyPress = (event) => {
    if (event.code === 'Enter') {
      search()
    }
  }
  return (
    <div className="input-group">
      <input onKeyPress={(event) => { keyPress(event) }} value={query} onChange={handleInput} placeholder="Busca peliculas , series y personas"></input>
      <button onClick={search}>Buscar</button>
    </div>
  )
}
