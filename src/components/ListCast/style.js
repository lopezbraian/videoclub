import styled from 'styled-components'

export const H2 = styled.h2`
  text-align:left;
  font-size:3.5rem;
  margin:0;
  margin-top:15px;
  /* color : ${props => props.modeDark ? 'white' : 'black'};
   */
  color:white;
  span {
    display:block;
    font-size:1.5rem;
    color:lightGreen;
  }
`
export const Wrapper = styled.div`
  background-color : var(--BLUE_DARK);
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
