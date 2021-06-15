import React from "react";
import Family from "./Family";
import { compose } from "redux";
import { withEditeContact } from "../../hoc/withEditeContact";

const FamilyContainer = ({ contacts, ...props }) => {
  const filterContacts = () => {
    return contacts.filter((contact) => contact.category === "Family");
  };

  return <Family {...props} contacts={filterContacts()} />;
};
export default compose(withEditeContact)(FamilyContainer);
