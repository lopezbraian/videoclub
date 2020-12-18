import React, { Children } from 'react'
import back from '../images/back.png'
import { useHistory } from 'react-router-dom'

export const ButtonBack = () => {
  const history = useHistory()
  function handleForward () {
    history.goBack()
  }
  return (
    <div style={{ marginLeft: '6%', position: 'absolute', left: '0' }} onClick={handleForward}>
        <img style={{ filter: 'invert(100%)' }} width="20px" height="20px" src={back} alt="home"></img>
    </div>
  )
}
