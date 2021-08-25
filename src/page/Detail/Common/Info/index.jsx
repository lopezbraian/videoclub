import React from 'react'
import { Vote } from '../../../../components/Vote'
import { WrapperTitle, WrapperProducer, Wrapper, WrapperResumen, WrapperVoteAndTrailer, WrapperGenero } from './Style-Info'
import { PlayArrow } from '@material-ui/icons'

export const Info = ({ idVideo, title, overview, genres, releaseDate, vote, openVideo, modeDark }) => {
  return (
    <Wrapper>
      <WrapperTitle>
        <h2>{title} { releaseDate && `(${releaseDate.split('-')[0]})`}</h2>
        <WrapperGenero>
          {genres.map((d, index) => {
            return (
              <span key={index}>{d.name}</span>
            )
          })}
        </WrapperGenero>
      </WrapperTitle>
      <WrapperVoteAndTrailer>
        <Vote vote={vote}></Vote>
        <div>
        {idVideo && (<button
        onClick = {openVideo}
        >
          <span><PlayArrow></PlayArrow></span>
          <span>Reproducir Trailer</span>
        </button>)}
      </div>
      </WrapperVoteAndTrailer>

      {overview !== '' && (<WrapperResumen modeDark={modeDark}>
        <h4>Resumen</h4>
        <p>
          {overview || ('No tenemos un resumen')}
        </p>
      </WrapperResumen>)}

      <WrapperProducer/>

    </Wrapper>
  )
}
