import styled from "styled-components";
import Box from "@material-ui/core/Box";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  @media (max-width: 430px) {
    /* min-width: 70px; */
  }
`;

export const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 300px;
  z-index: 9999;
  background-color: white;
  border: solid 1px gray;
  border-radius: 10px;
  input {
    width: 290px;
    margin-top: 11px;
  }
  button {
    margin-top: 20px;
  }
`;

export const StyledModalButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
