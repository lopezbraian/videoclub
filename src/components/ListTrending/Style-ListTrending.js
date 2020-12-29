import styled from 'styled-components'
export const WrapperHeaderList = styled.div`
  display:flex;
  flex-direction:column;
  @media screen and (min-width:720px) {
    flex-direction:row;
    align-items:center;
    justify-content:space-between; 
  }
`

export const WrapperSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:10px;
  @media screen and (min-width:720px) {
    margin-top:0px;
    justify-content: flex-end;
    ul {
      margin-left: 10px;
    }
  }
`
