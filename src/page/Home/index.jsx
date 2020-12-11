import React from 'react'
import { ListMovies } from '../../components/ListMovies'
import { ListTrendig } from '../../components/ListTrending'
import { ListTv } from '../../components/ListTv'
import { Searcher } from '../../components/Searcher'
export const Home = (props) => {
  return (
    <>
      <Searcher></Searcher>
      <ListTrendig/>
      <ListMovies ></ListMovies>
      <ListTv></ListTv>
    </>
  )
}
