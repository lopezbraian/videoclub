import styled from 'styled-components'

export const WrapperDetail = styled.div`

  display:flex;
  overflow-y:auto;
  flex-wrap:nowrap;

`

export const H2 = styled.h2`
  text-align:left;
  font-size:3.5rem;
  margin-top:15px;
  color : ${props => props.modeDark ? 'white' : 'black'};
  
`
