import styled from "styled-components";

export const WrapPoster = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  position: relative;
  height: 100%;
  padding: 10px 0 ;
  gap: 10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;
