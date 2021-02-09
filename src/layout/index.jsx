import React from 'react'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div style={{ paddingTop: '38px', maxWidth: '1350px ', minWidth: '375px', margin: 'auto', height: '100%' }} className="wrapper-child">
        {children}
      </div>
    </>
  )
}
