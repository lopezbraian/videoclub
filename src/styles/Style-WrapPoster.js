import styled, { keyframes } from 'styled-components'

export const WrapPoster = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  position:relative;
  @media screen and (min-width: 768px ){ 
    margin-bottom:10px;
  }
  ::after {
    content: '';
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    will-change: opacity;
    pointer-events: none;
    opacity: ${props => props.scroll ? '0' : '1'};
    transition: all 200ms ease-in;
  }

`
