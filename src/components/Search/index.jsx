import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { WrapperForm } from './style'
import { connect } from 'react-redux'

export const SearchPres = ({ initialValue, modeDark }) => {
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
    <WrapperForm onSubmit={search} modeDark={modeDark} >
      <input value={query} onChange={handleInput} placeholder="Series y películas"></input>
      <button onClick={search}>Buscar</button>
    </WrapperForm>
  )
}
const mapStateToProps = state => {
  return {
    modeDark: state.ui.modeDark
  }
}
export const Search = connect(mapStateToProps, {})(SearchPres)
