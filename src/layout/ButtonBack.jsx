import React from 'react'
import back from '../images/back.png'
import { useHistory } from 'react-router-dom'

export const ButtonBack = () => {
  const history = useHistory()
  function handleForward () {
    history.goBack()
  }
  return (
    <div onClick={handleForward}>
        <img style={{ filter: 'invert(100%)' }} width="20px" height="20px" src={back} alt="home"></img>
    </div>
  )
}
