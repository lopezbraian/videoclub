import styled from "styled-components";

export const WrapperForm = styled.form`
  position: relative;
  min-width: 320px;
  max-width: 400px;
  height: 40px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  border: ${(props) =>
    props.modeDark ? ".5px solid transparent" : ".5px solid black"};
  input {
    width: 80%;
    border: none;
    outline: none;
    height: 40px;
    padding-left: 10px;
    border-radius: 0;
    font-size: 2.5rem;
  }

  input::placeholder {
    font-size: 1.8rem;
  }
`;
