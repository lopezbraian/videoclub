import React from 'react'
import { Wrapper, WrapperBio } from './style-info'

export const Info = ({ name, bio = '' }) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <WrapperBio>
        <h4>Biografía</h4>
        <p>{bio.slice(0, 400) || (`No tenemos una biografía sobre ${name}`)}</p>
      </WrapperBio>
    </Wrapper>
  )
}
