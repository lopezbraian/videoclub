import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px ;
  img {
    border-radius: 5px ;
  }
`
export const WrapperInfo = styled.div`
  margin-left: 10px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: ${props => props.modeDark ? 'white' : 'black'}
`
