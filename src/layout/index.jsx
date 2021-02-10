import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'

const Layout = ({ children, modeDark }) => {
  return (
    <>
      <Header></Header>
      <div style={{ paddingTop: '38px', maxWidth: '1350px ', minWidth: '375px', margin: 'auto', height: '100%' }} className="wrapper-child">
        {children}
      </div>
      <footer style={{ marginBottom: '30px' }}>
        <p style={{ textAlign: 'center', color: modeDark ? 'white' : 'black' }}>Hecho con <span>💙</span> by Braian Emanuel López</p>
        <a style={{ textDecoration: 'none', display: 'block', cursor: 'pointer', textAlign: 'center', color: modeDark ? 'white' : 'black' }} href="https://www.themoviedb.org/" target='__blank'>Datos obtenidos gracias a themoviedb </a>
      </footer>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}

export default connect(mapStateToProps, null)(Layout)
