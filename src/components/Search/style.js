import styled from 'styled-components'

export const WrapperForm = styled.form`
  position: relative;
  width:350px;
  margin: 0 auto;
  border-radius: 30px;
  display:flex;
  border-radius:5px;
  overflow:hidden;
  border: ${props => !props.modeDark
    ? '.5px solid black'

    : 'none'
      };
  input {
    border:none;
    width:100%;
    outline: none;
    height: 40px;
    padding-left:10px;
    font-size: 1.2rem;
    letter-spacing: 3px;
  }

  input::placeholder {
    font-size: 1.2rem;
  }
  button {
    width:60px;
    border: none;
    outline: none;
    border: none;
    font-size: 1.2rem;
    background: var(--BUTTON);
    color: white;
  }
`
