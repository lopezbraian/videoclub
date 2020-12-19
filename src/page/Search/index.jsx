import React, { useEffect, useState } from 'react'
import { Filter } from './Filter'
import { useLocation } from 'react-router-dom'
import api from '../../api'
import { Results } from './Results'
import { Search as InputSearch } from '../../components/Search'
import './style.scss'

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function useGetTypes (data = []) {
  const types = {
    movie: 0,
    tv: 0,
    person: 0
  }
  if (!data.results) return types
  data.results.forEach((d) => {
    if (d.media_type === 'movie') {
      types.movie = types.movie + 1
    } else if (d.media_type === 'tv') {
      types.tv = types.tv + 1
    } else if (d.media_type === 'person') {
      types.person = types.person + 1
    }
  })
  return types
}
export const Search = () => {
  const query = useQuery().get('query')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [selectType, setSelectType] = useState('movie')
  const types = useGetTypes(data)
  useEffect(() => {
    async function getData () {
      if (query === '') return false
      try {
        setLoading(true)
        const result = await api.querySearch(query)
        if (result) { setData(result) }
        setLoading(false)
      } catch {
        return false
      }
    }
    getData()
  }, [query])
  return (
    <div>
      {loading
        ? '...cargando'
        : (
        <>
          <InputSearch initialValue={query}/>
          <Filter types={types} setSelectType={setSelectType} selectType={selectType}></Filter>
          <div style={{ padding: '20px' }}>
            <Results data = {data} selectType={selectType}></Results>
          </div>
        </>
          )}
    </div>
  )
}
