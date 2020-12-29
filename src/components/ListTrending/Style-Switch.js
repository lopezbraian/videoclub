import styled from 'styled-components'

export const Ul = styled.ul`
  margin: 0;
  border:.3px solid black;
  border-radius:30px;
  padding: 0;
  overflow: hidden;
`
export const Li = styled.li`
  cursor: pointer;  
  display:inline-block;
  margin: 0;
  font-size: 1.2rem;
  border-radius:30px;
  color : ${
    props => props.modeDark
      ? 'white'
      : 'black'};
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px;
  list-style: none;
`
export const LiSelect = styled(Li)`
  background: var(--BUTTON);
  color : ${
    props => props.modeDark
      ? 'white'
      : 'white'};
`
