import styled from 'styled-components'

export const WrapperPoster = styled.div`
  
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  color:white;
  position:relative;
  z-index:1;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
  overflow: hidden;
  
  @media screen and (min-width:720px ) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
  }
`
export const ImageHero = styled.div`
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-image:url(${props => props.imgSrcHero});
  background-size:cover; 
  background-position:center; 
  background-repeat:no-repeat;
  z-index:-1;
  &::after {
    content: "";
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color : rgba(0,0,0,0.5)
  }
`
