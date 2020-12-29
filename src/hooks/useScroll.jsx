import { useState } from 'react'

export const useScroll = () => {
  const [scroll, setScroll] = useState(false)
  function changeScroll (target) {
    if (target.scrollLeft > 0) {
      setScroll(true)
    } else if (target.scrollLeft <= 0) {
      setScroll(false)
    }
  }
  return [scroll, changeScroll]
}
