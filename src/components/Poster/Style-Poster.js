import styled from "styled-components";

export const WrapperPoster = styled.div`
  margin-right: 20px;
  box-sizing: border-box;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: show 0.3s ease-in-out forwards;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const WrapperImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;
export const Img = styled.img`
  object-fit: cover;
  width: 150px;
  height: 250px;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;
export const Vote = styled.div`
  position: absolute;
  top: -40px;
  left: 10px;
`;
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  position: relative;
  height: 100px;
  text-align: center;
`;
const P = styled.p`
  color: ${(props) => (props.modeDark ? "white" : "black")};
`;
export const Name = styled(P)`
  margin: 0;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const Date = styled(P)`
  font-size: 1.2rem;
`;
