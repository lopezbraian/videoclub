import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export const CirculesProgress = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <CircularProgress size="100px"></CircularProgress>
    </div>
  )
}
