import React, { useState } from 'react'
import './style-selector.scss'
export const Selector = ({ option }) => {
  return (
    <div className="selector">
      <h2>Lo más popular {option}</h2>
    </div>
  )
}
