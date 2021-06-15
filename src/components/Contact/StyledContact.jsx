import styled from "styled-components";

const StyledContact = styled.div((props) => ({
  // background: props.colorString,
  display: "flex",
  justifyContent: "space-around",
  padding: "10px",
  textAlign: "center",
  borderBottom: "solid gainsboro 1px",
  color: "gray",
  width: "100%",
  transition: "all 0.7s ease 0s",
  ":hover": {
    // cursor: "pointer",
    background: props.colorString ? props.colorString : "#dfd7d7",
    transition: "all 0.7s ease 0s",
  },
}));

export default StyledContact;
