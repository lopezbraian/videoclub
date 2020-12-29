import styled from 'styled-components'

export const WrapperSelector = styled.div`
  max-width: 300px;
  text-align: center;
  border-radius: 5px;
  padding: 1rem;
  font-size:1.3rem;
  background-color: ${props => props.modeDark ? 'white' : 'var(--BACKGROUND_THEME_DARK)'};
  color: ${props => props.modeDark ? ('dark') : ('white')};
  h2 {
    margin:0
  }
`
