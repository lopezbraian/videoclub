import React from 'react'
import { Person } from './Person'
import { PosterOnlyName } from '../../components/PosterOnlyName'
import './style-result.scss'

export const Results = ({ data, selectType, modeDark }) => {
  if (!data.results) return <h1>Nothing</h1>
  const filterData = data.results.filter((d) => d.media_type === selectType)
  return (
    <div className="result-wrap">
      {filterData.map((d, index) => {
        if (d.media_type === 'movie') {
          return <PosterOnlyName modeDark={modeDark} key={index} data={d} type={d.media_type}/>
        } else if (d.media_type === 'tv') {
          return <PosterOnlyName modeDark={modeDark} key={index} data={d} type={d.media_type}/>
        } else {
          return <Person key={index} data={d}></Person>
        }
      })}
    </div>
  )
}
