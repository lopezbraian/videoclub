import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import './style-vote.scss'
export const Vote = ({ vote }) => {
  return (
    <div className="wrapper-vote">
      <CircularProgress style={{ color: ' rgb(10, 223, 28)' }} size="5.5rem" variant="determinate" value={vote * 10} color="primary"/>
      <p>{vote === 0 ? ('-- ') : (vote) }<span> pts</span></p>
    </div>
  )
}
