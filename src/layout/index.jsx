import React from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div style={{ paddingTop: '50px', maxWidth: '1350px ', margin: 'auto', height: '100vh' }} className="wrapper-child">
        {children}
      </div>
    </div>
  )
}
