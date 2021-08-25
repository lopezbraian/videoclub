import styled from "styled-components";

export const WrapPoster = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  position: relative;
  height: 100%;
  html::-webkit-scrollbar {
    width: 10px;
  }
`;
