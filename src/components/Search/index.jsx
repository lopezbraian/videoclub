import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'

export const Search = ({ initialValue }) => {
  const [query, setQuery] = useState(initialValue)
  const history = useHistory()
  const handleInput = (event) => {
    setQuery(event.target.value)
  }
  const search = async (event) => {
    event.preventDefault()
    if (query.length > 3) {
      history.push(`/search?query=${query}`)
    }
  }
  return (
    <form onSubmit={search} className="input-group">
      <input value={query} onChange={handleInput} placeholder="Busca peliculas , series y personas"></input>
      <button onClick={search}>Buscar</button>
    </form>
  )
}
