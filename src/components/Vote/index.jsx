import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './style-vote.scss'

export const Vote = ({ vote }) => {
  return (
    <div className="wrapper-vote">
      <CircularProgress style={{ borderRadius: '50%', backgroundColor: 'black', color: ' rgb(10, 223, 28)' }} size="5.5rem" variant="determinate" value={vote * 10} color="primary"/>
      <p>{vote === 0 ? ('-- ') : (vote) }<span> pts</span></p>
    </div>
  )
}
