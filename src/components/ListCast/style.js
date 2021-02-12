import styled from 'styled-components'

export const H2 = styled.h2`
  text-align:left;
  font-size:3.5rem;
  margin:0;
  margin-top:15px;
  color : ${props => props.modeDark ? 'white' : 'black'};

`
export const Wrapper = styled.div`
  background-color: ${props => props.modeDark ? ('var(--BACKGROUND_THEME_DARK)') : ('#FFFFFF')};
  padding-top:20px;
  padding:10px;
`
export const WrapperActor = styled.div`
  height:100%;
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  margin-top:20px;
`
