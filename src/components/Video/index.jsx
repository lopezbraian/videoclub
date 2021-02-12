import React from 'react'
import YouTube from 'react-youtube'
import { Wrapper } from './style-video'
import { CloseRounded } from '@material-ui/icons'
import { Button } from '@material-ui/core'
export const Video = ({ idVideo, closeVideo }) => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const onReady = (event) => {
    event.target.pauseVideo()
  }

  return (
    <Wrapper>
      <Button onClick={closeVideo} variant="contained" color="default"><CloseRounded></CloseRounded></Button>
      <YouTube videoId={idVideo} opts={opts} onReady={onReady} onEnd={closeVideo}></YouTube>
    </Wrapper>
  )
}
