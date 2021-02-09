import styled from 'styled-components'

export const WrapperPoster = styled.div`
  margin-right: 20px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`
export const WrapperImage = styled.div`
  position: relative;
`
export const Img = styled.img`
  object-fit: cover;
  width: 150px;
  height: 250px;
  transition: all .5s ease-in-out;
  &:hover {
    transform:scale(1.1)
  }
`
export const Vote = styled.div`
  position: absolute;
  bottom:-25px;
`
export const WrapperTitle = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 10px;
`
const P = styled.p`
  color: ${props => props.modeDark ? 'white' : 'black'}
`
export const Name = styled(P)`
  margin: 0;
  overflow:hidden;
  font-size: 1.5rem;
  font-weight: bold;
`
export const Date = styled(P)`
  font-size: 1.2rem;
`
