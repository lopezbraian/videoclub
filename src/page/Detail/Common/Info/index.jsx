import React from 'react'
import { Vote } from '../../../../components/Vote'
import { WrapperTitle, Wrapper, WrapperResumen, WrapperVote, WrapperGenero } from './Style-Info'

export const Info = ({ title, overview, genres, releaseDate, vote }) => {
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
      <WrapperVote>
        <Vote vote={vote}></Vote>
      </WrapperVote>
      <WrapperResumen>
        <h4>Resumen</h4>
        <p>
          {overview || ('No tenemos un resumen')}
        </p>
      </WrapperResumen>
    </Wrapper>
  )
}
