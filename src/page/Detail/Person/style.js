import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  color : ${props => props.modeDark ? 'white' : 'black'};
  @media screen and (min-width:768px) {
    grid-template-columns : 300px 1fr;
  }
`
export const WrapperLeft = styled.div`
  justify-self: center;
`
export const WrapperInfo = styled.div`
  text-align:center;
  margin-top:20px;
`

export const H4 = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`

export const WrapperRigth = styled.div`
  overflow:hidden;
  @media screen and (min-width:768px) {
    margin-left:25px;
  }
`
