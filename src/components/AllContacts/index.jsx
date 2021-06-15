import React from "react";
import AllContacts from "./AllContacts";
import { compose } from "redux";
import { withEditeContact } from "../../hoc/withEditeContact";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const AllContactsContainer = (props) => {
  const workColor = (category) => {
    return category === "Works" ? "#ff00004d" : false;
  };
  const familyColor = (category) =>
    category === "Family" ? "#0000ff29" : false;
  const friendsColor = (category) =>
    category === "Friends" ? "#0080004f" : false;
  return (
    <AllContacts
      {...props}
      workColor={workColor}
      familyColor={familyColor}
      friendsColor={friendsColor}
    />
  );
};
export default compose(
  withErrorBoundary,
  withEditeContact
)(AllContactsContainer);
