import React from 'react'
import './style-vote.scss'

export const Vote = ({ vote }) => {
  console.log('vote', vote)
  function getColor () {
    const voteFormat = vote * 10
    if (voteFormat < 60) {
      return {
        strokeDashoffset: `calc(157 - (157 * ${voteFormat})/100)`,
        stroke: 'var(--accountOrange)'
      }
    } else {
      return {
        strokeDashoffset: `calc(157 - (157 * ${voteFormat})/100)`,
        stroke: 'var(--accountGreen)'
      }
    }
  }
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle cx="25" cy="25" r="25"></circle>
          <circle style={ getColor()} cx="25" cy="25" r="25"></circle>
        </svg>
        <div className="number">
          <h2>{vote} <span>pts</span></h2>
        </div>
      </div>
    </div>
  )
}
