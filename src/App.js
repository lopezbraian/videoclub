import React from 'react'
import { connect } from 'react-redux'
import Routes from './route/App'
import GlobalStyle from './styles/Style-Global'

const App = ({ modeDark }) => {
  return (
    <>
      <GlobalStyle themeDark = {modeDark}/>
      <Routes/>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}
export default connect(mapStateToProps, {})(App)
