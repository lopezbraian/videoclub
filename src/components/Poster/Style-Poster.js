import styled from 'styled-components'

export const WrapperPoster = styled.div`
  margin-right: 20px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  height:100%;
`
export const WrapperImage = styled.div`
  position: relative;
  overflow:hidden;
  border-radius:10px;
`
export const Img = styled.img`
  object-fit: cover;
  width: 150px;
  height: 250px;
  transition: transform .5s ease-in-out;
  &:hover {
    transform:scale(1.04)
  }
`
export const Vote = styled.div`
  position: absolute;
  top:-40px;
  left:10px;
`
export const WrapperTitle = styled.div`
  margin-top:10px;
  position:relative;
  padding-top: 30px;
  text-align: center;
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
