import React from "react";
import Works from "./Works";
import { compose } from "redux";
import { withEditeContact } from "../../hoc/withEditeContact";

const WorksContainer = ({ contacts, ...props }) => {
  const filterContacts = () => {
    return contacts.filter((contact) => contact.category === "Works");
  };

  return <Works {...props} contacts={filterContacts()} />;
};
export default compose(withEditeContact)(WorksContainer);
