import styled from 'styled-components'

export const WrapperForm = styled.form`

position:relative;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  input {
    outline:none;
    text-transform:uppercase ;
    color:${props => !props.modeDark ? 'white' : ''};
    width:100%;
    height:40px;
    border:none;
    padding-left:20px;
    font-size:1.4rem;
    background-color: ${props => !props.modeDark ? 'var(--BACKGROUND_THEME_DARK)' : ''};
  }
  button {
    width: 20%;
    position:absolute;
    text-transform:uppercase;
    outline:none;
    border:0;
    background-color: var(--BLUE_DARK);
    color:white;
    right:0;
    height:100%;
  }
`
