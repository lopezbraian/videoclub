import styled from 'styled-components'

export const WrapperActor = styled.div`
  min-width: 150px;
  height: 340px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right:10px;
`

export const P = styled.p`
  font-size: 1.3rem;
  height: 30px;
  color : ${props => props.modeDark ? 'white' : 'black'};
  margin:0;
  font-weight:lighter;
`

export const WrapperImage = styled.div`
  width: 100%;
  height: 200px;
  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
