import styled from "styled-components";

export const WrapperForm = styled.form`
  position: relative;
  min-width: 320px;
  max-width: 700px;
  height: 60px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  input {
    width: 80%;
    border: none;
    outline: none;
    height: 100%;
    padding-left: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 2.5rem;
  }

  input::placeholder {
    font-size: 2.2rem;
    font-style: italic;
  }
`;
