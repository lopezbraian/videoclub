import styled from 'styled-components'

export const WrapperPoster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  /* color: ${props => props.modeDark ? 'white' : 'dark'}; */
  color:white;
  @media screen and (min-width:720px ) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
  }
`
export const WrapperDetail = styled.div`
  width: 100%;
  height: 100%;
`
