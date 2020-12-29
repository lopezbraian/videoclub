import styled from 'styled-components'

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (min-width:720px) { 
    margin-left:20px;
    height:500px;
    align-items:flex-start;
  }
`
export const WrapperTitle = styled.div`
  text-align:center;
  h2 {
    font-size:3rem;
    margin-bottom:0;
  }
  @media screen and (min-width:720px) {
    text-align:left;
    h2 {
      font-size:5rem;
    }
  }
`
export const WrapperGenero = styled.div`
  margin-bottom:20px;
  span {
    font-size:1rem;
    display:inline-block;
    margin-left:5px;
  }
`
export const WrapperVote = styled.div`
  display:flex;
  justify-content:center;
`

export const WrapperResumen = styled.div`
  h4 {
    margin-left:20px;
    font-size:2rem;
  }
  p {
    margin:0;
    padding:0 20px;
    font-size:1.4rem;
  }
  @media screen and (min-width:720px) { 
    h4 {
      margin-left:0px;
    }
    p{
      padding : 0 ;
      max-width:600px;
      font-size:1.6rem;
    }
  }
`
