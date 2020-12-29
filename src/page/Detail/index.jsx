import React from 'react'
import { Detail as DetailMovie } from '../Detail/Movie'
import { Detail as DetailTv } from '../Detail/Tv'
import { PersonDetail } from '../Detail/Person'
import { connect } from 'react-redux'

export const DetailPres = ({ type, modeDark }) => {
  if (type === 'movie') {
    return <DetailMovie modeDark={modeDark} />
  } else if (type === 'tv') {
    return <DetailTv modeDark={modeDark} />
  } else {
    return <PersonDetail modeDark={modeDark} />
  }
}
const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}
export const Detail = connect(mapStateToProps, {})(DetailPres)
