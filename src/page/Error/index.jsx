import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'

export const Error404 = (props) => {
  const history = useHistory()

  return (
    <div className="error-wrapper">
      <h2>No hemos podido encontrar lo que estas buscando :/</h2>
      <Button size="large" variant="contained" onClick={() => {
        history.push('/')
      }}>Ir a home</Button>
    </div>
  )
}
