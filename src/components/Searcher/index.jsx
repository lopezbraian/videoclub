import React, { useState } from 'react'
import './styles.scss'
import imageSearcher from '../../images/searcher.jpg'
import { useHistory } from 'react-router-dom'
import { Search } from '../Search'
export const Searcher = () => {
  return (
    <div className="searcher">
      <div className="searcher__image">
        <img src={imageSearcher}></img>
      </div>
      <div>
        <h3 className="searcher__h3">Bienvenidos</h3>
        <h3 className="searcher__h3">Millones de películas, programas de televisión. Explora ahora.</h3>
      </div>
      <Search/>
    </div>
  )
}
