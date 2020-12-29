import styled from 'styled-components'

export const WrapperSelector = styled.div`
  border-radius: 15px;
  font-size:2rem;
  font-weight:700;
  color: ${props => props.modeDark ? ('white') : ('black')};
  h2 {
    margin:0
  }
`
