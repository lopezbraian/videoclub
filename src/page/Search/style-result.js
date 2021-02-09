import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 0;
  display:grid;
  grid-template-columns: repeat(auto-fill , minmax(100px , 1fr));
  @media screen and (min-width:768px) {
    grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
  }
  gap:5px;
`
