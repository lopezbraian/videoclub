import React, { Children } from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div style={{ paddingTop: '50px' }} className="wrapper-child">
        {children}
      </div>
    </div>
  )
}
