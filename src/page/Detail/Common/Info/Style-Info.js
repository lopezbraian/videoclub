import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 720px) {
    margin-left: 20px;
    height: 500px;
    align-items: flex-start;
  }
`
export const WrapperTitle = styled.div`
  text-align: center;
  h2 {
    font-size: 3rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: 720px) {
    text-align: left;
    h2 {
      font-size: 5rem;
    }
  }
`
export const WrapperGenero = styled.div`
  margin-bottom: 20px;
  span {
    font-size: 1rem;
    display: inline-block;
    margin-left: 5px;
  }
`
export const WrapperVote = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-bottom: 20px;
  @media screen and (min-width: 720px) {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  button {
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:20px;
    border:0;
    border-radius:10px;
    height:30px;
    outline:none;
  }
 
`

export const WrapperResumen = styled.div`
  background-color: var(--BACKGROUND_THEME_DARK);
  padding-bottom: 25px;
  h4 {
    padding-top:20px;
    margin-top: 0px;
    margin-left: 20px;
    font-size: 2rem;
  }
  p {
    min-width:325px;
    max-height:150px;
    overflow-y:auto;
    margin: 0;
    padding: 0 20px;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 720px) {
    background: none;
    padding-bottom: 0;
    h4 {
      margin-top:20px;
      margin-left: 0px;
    }
    p {
      padding: 0;
      max-width: 600px;
      font-size: 1.6rem;
    }
  }
`
