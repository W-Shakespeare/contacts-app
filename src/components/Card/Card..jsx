import React from "react";
import StyledCard from "./StyledCard";
import StyledCardContent from "./StyledCardContent";
import StyledCardHeader from "./StyledCardHeader";

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
export default Card;
