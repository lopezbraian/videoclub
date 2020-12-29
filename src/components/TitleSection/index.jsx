import React from 'react'
import { WrapperSelector } from './Style-TitleSection'
import { connect } from 'react-redux'

const TitleSection = ({ text, modeDark }) => {
  return (
    <WrapperSelector modeDark={modeDark}>
      <h2>{text}</h2>
    </WrapperSelector>
  )
}

const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}
export default connect(mapStateToProps, {})(TitleSection)
