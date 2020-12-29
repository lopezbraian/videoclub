import styled from 'styled-components'

export const Ul = styled.ul`
  background-color: ${
    props =>
      props.modeDark
      ? 'white'
      : 'var(--BLUE_DARK)'
  };
  border : ${props =>
      props.modeDark
      ? 'none'
      : '1px solid black'};
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
`
export const Li = styled.li`
  cursor: pointer;
  border-right: 1px solid black;
  margin: 0;
  font-size: 1.2rem;
  color : ${
    props => props.modeDark
      ? 'black'
      : 'white'};
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  list-style: none;
`
export const LiSelect = styled(Li)`
  background-color: ${
    props =>
      props.modeDark
      ? 'var(--BLUE_DARK)'
      : 'white'
  };
  color : ${
    props => props.modeDark
      ? 'white'
      : 'black'};
`
