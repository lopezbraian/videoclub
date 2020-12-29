import React, { useEffect, useState } from 'react'
import { Filter } from './Filter'
import { useLocation } from 'react-router-dom'
import api from '../../api'
import { Results } from './Results'
import { Search as InputSearch } from '../../components/Search'
import { connect } from 'react-redux'
import { CirculesProgress } from '../../components/Loading'
import { WrapperSearch } from './style'

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
export const SearchPres = ({ modeDark }) => {
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
    <>
      {loading
        ? <CirculesProgress/>
        : (
        <>
          <WrapperSearch>
            <InputSearch initialValue={query}/>
          </WrapperSearch>
          <Filter modeDark={modeDark} types={types} setSelectType={setSelectType} selectType={selectType}></Filter>
          <div style={{ padding: '20px' }}>
            <Results modeDark={modeDark} data = {data} selectType={selectType}></Results>
          </div>
        </>
          )}
    </>
  )
}
const mapStateToProps = state => {
  return {
    modeDark: state.ui.modeDark
  }
}
export const Search = connect(mapStateToProps, {})(SearchPres)
