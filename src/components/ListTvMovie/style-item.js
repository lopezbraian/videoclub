import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right:15px;
  img {
    width: 150px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px ;
  }
`
export const WrapperInfo = styled.div`
  text-transform: uppercase;
  color: black;
  font-size: 1.2rem;
  p {
    color:${props => props.modeDark ? 'white' : 'black'};
    text-align: center;
    margin: 0;
    margin-top:10px;
  }
`
