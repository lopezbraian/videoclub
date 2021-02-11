import React, { useEffect, useState } from 'react'
import api from '../../api'
import YouTube from 'react-youtube'
import { Wrapper } from './style-video'

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
      <YouTube videoId={idVideo} opts={opts} onReady={onReady} onEnd={closeVideo}></YouTube>
    </Wrapper>
  )
}
