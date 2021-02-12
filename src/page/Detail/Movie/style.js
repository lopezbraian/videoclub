import styled from 'styled-components'

export const WrapperDetail = styled.div`
  width: 100%;
  height: 100%;
  position:relative;
  &::after {
    ${props => props.videoOn
    ? (
      `
      position:absolute;
      content:"";
      left:0;
      right:0;
      top:0;
      bottom:0;
      background-color:rgba(0,0,0,0.5);
    `
    )
    : ('')}
  }
`
