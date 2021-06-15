import styled from "styled-components";

const StyledCategory = styled.div`
  margin-left: 40px;
  width: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 430px) {
    /* min-width: 70px; */
    margin-left: 30px;
    margin-right: 15px;
  }
`;

export default StyledCategory;
