import styled from 'styled-components'

export const WrapperForm = styled.form`
  position:relative;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  border-radius:30px; 
  overflow:hidden;
  input {
    outline:none;
    height:40px;
    border:none;
    overflow:hidden;
    padding-left:15px;
    font-size:1.2rem;
    font-weight:700; 
    letter-spacing: 3px;
    text-align:left;
    width: 80%;
  }
  input::placeholder {
    font-size:1.2rem;
  }
  button {
    border:none;
    width: 20%;
    position:absolute;
    text-transform:uppercase;
    outline:none;
    border:none;
    font-size:1.4rem;
    /* background-color: var(--BLUE_DARK); */
    background : var(--BUTTON);
    color:white;
    right:0;
    top:0;
    bottom:0; 
    height:100%;
  }
`
