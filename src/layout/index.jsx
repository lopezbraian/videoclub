import React , {useContext} from 'react'
import { Header } from './Header'
import {UiContext} from '../context'

export default function Layout({ children })  {
  const {modeDark} = useContext(UiContext)
  return (
    <>
      <Header></Header>
      <div style={{ paddingTop: '38px', maxWidth: '1350px ', minWidth: '375px', margin: 'auto', height: '100%' }} className="wrapper-child">
        {children}
      </div>
      <footer style={{ marginBottom: '30px' }}>
        <p style={{ textAlign: 'center', color: modeDark ? 'white' : 'black' }}>Braian Emanuel López</p>
        <a style={{ textDecoration: 'none', display: 'block', cursor: 'pointer', textAlign: 'center', color: modeDark ? 'white' : 'black' }} href="https://www.themoviedb.org/" target='__blank'>Datos obtenidos gracias a themoviedb </a>
      </footer>
    </>
  )
}