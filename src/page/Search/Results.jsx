import React from 'react'
import { Person } from './Person'
import { Movie } from './Movie'
import { Tv } from './Tv'
export const Results = ({ data, selectType }) => {
  if (!data.results) return <h1>Nothing</h1>
  const filterData = data.results.filter((d) => d.media_type === selectType)
  console.log(filterData)
  return (
    <div>
      {filterData.map((d, index) => {
        if (d.media_type === 'movie') {
          return <Movie key={index} data={d}></Movie>
        } else if (d.media_type === 'tv') {
          return <Tv key={index} data={d}></Tv>
        } else {
          return <Person key={index} data={d}></Person>
        }
      })}
    </div>
  )
}
