import React from 'react'
import { ListMovies } from '../../components/ListMovies'
import { ListTrendig } from '../../components/ListTrending'
import ListTv from '../../components/ListTv'
import { Searcher } from '../../components/Searcher'

export const Home = () => {
  return (
    <>
      <Searcher></Searcher>
      <div className="wrapper-padding">
        <ListTrendig/>
        <ListMovies />
        <ListTv></ListTv>
      </div>
    </>
  )
}
