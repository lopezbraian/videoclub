import React from 'react'
import './style-vote.scss'
import styled, { keyframes } from 'styled-components'

export const Vote = ({ vote }) => {
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle cy="50%" cx="50%" r="25"></circle>
          <Circle vote={vote * 10} cy="50%" cx="50%" r="25"></Circle>
        </svg>
        <div className="number">
          <h2>{vote} <span>pts</span></h2>
        </div>
      </div>
    </div>
  )
}
const animation = keyframes`
  from{
    stroke-dashoffset:0;
  }
  to{
    stroke-dashoffset:${props => 156.83 - (156.83 * props.vote) / 100};
  }
`
const Circle = styled.circle`
    stroke: #04fc04 ;
    animation:${animation} 5s;
    stroke-dashoffset:${props => 156.83 - (156.83 * props.vote) / 100}
`
