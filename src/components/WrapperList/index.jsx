import React from 'react'
import { useScroll } from '../../hooks/useScroll'
import { Poster } from '../Poster'
import { WrapPoster } from '../../styles/Style-WrapPoster'

export const WrapperList = ({ data = [], type }) => {
  const [scroll, setScroll] = useScroll()

  function handleScroll (e) {
    setScroll(e.target)
  }
  return (
      <WrapPoster onScroll={handleScroll} scroll={scroll}>
        {
          data.map((data, index) => {
            return (
            <Poster key={index} data={data} type={data.media_type || type}></Poster>
            )
          })
        }
      </WrapPoster>

  )
}
