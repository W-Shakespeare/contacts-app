import styled from "styled-components";

const StyledCard = styled.div`
  font-family: "Roboto", sans-serif;
  height: min-content;
  width: 70%;
  border-radius: 7px;
  display: flex;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
  flex-direction: column;
  background: #bbb7b700;
  border: solid 1px #8080806b;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 430px) {
    padding: 0px;
    width: 100%;
    font-size: 12px;
  }
`;

export default StyledCard;
