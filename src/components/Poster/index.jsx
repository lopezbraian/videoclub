import React from 'react'
import { getUrlImage } from '../../utils/getUrlFromImages'
import { Vote } from '../Vote'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Img,
  WrapperPoster,
  WrapperImage,
  Vote as VoteStyle,
  WrapperTitle,
  Name,
  Date
} from './Style-Poster'

const PosterPres = ({ data, type, modeDark }) => {
  return (
      <WrapperPoster>
        <WrapperImage>
          <Link to={type === 'movie' ? `/movie/${data.id}` : `/tv/${data.id}` }>
            <Img width="150px" height="200px" src={getUrlImage(200, data.poster_path)}></Img>
            <VoteStyle>
              <Vote vote={data.vote_average}/>
            </VoteStyle>
          </Link>
        </WrapperImage>
        <WrapperTitle>
          <Name modeDark = {modeDark} >{data.title || data.name}</Name>
          {type === 'tv' && (
            <Date modeDark = {modeDark} >Primer episodio</Date>
          )}
          <Date modeDark = {modeDark} >{data.release_date || data.first_air_date}</Date>
        </WrapperTitle>
      </WrapperPoster>
  )
}
const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}
export const Poster = connect(mapStateToProps, {})(PosterPres)
