import React from 'react'
import { ListMovies } from '../../components/ListMovies'
import { Searcher } from '../../components/Searcher'
export const Home = (props) => {
  return (
    <>
      <Searcher></Searcher>
      <ListMovies type="movie"></ListMovies>
      <ListMovies type="tv"></ListMovies>
    </>
  )
}
