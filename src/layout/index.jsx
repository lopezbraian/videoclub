import React, { Children } from 'react'
import { Searcher } from '../components/Searcher'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className="wrapper-child">
        {children}
      </div>
    </div>
  )
}
