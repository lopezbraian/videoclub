import styled from 'styled-components'

export const Wrapper = styled.div`
  h3 {
    margin:0;
    text-align:center;
    font-size:3.5rem;
    color : ${props => props.modeDark ? 'white' : 'black'}
  }
`
export const WrapperFilterList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 10px;
  ul {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 45px;
      margin: 0;
      padding: 0;
    }
    li {
      cursor: pointer;
      display: flex;
      color: gray;
      margin: 0 20px;
      font-size: 1.5rem;
      align-items:center ;
      @media screen and (min-width:768px) {
        font-size:2rem;
      }
      span {
        border-radius: 5px;
        border: 1px solid gray;
        padding: 0 5px 0 5px;
        margin-left: 5px;
      }
    }
`
