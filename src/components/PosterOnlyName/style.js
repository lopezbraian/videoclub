import styled from 'styled-components'

export const Wrapper = styled.div`
  position:relative;
  display: flex;
  height:100%;
  margin-bottom: 15px ;
  overflow:hidden;
  img {
    width:100%;
    height:100%;
    object-fit:cover;
    transition : all .5s ease-in-out;
    border-radius: 5px ;
  }
  img:hover {
    transform: scale(1.05)
  }
`
export const WrapperInfo = styled.div`
  background-color:rgba(0 , 0 ,0 , 0.5);
  bottom:0;
  padding:10px;
  width:100%;
  position:absolute;
  text-transform: uppercase;
  font-size:1rem;
  h4 {
    margin-top:0;
  }
  h5 {
    margin:0;
  }
  @media screen and (min-width:768px) { 
    font-size: 1.4rem;
    h4 {
    margin-top:0;
  }
  h5 {
    margin:10px 0;
  }
  }
  color: ${props => props.modeDark ? 'white' : 'black'}
`
