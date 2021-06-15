import React from "react";
import Friends from "./Friends";
import { compose } from "redux";
import { withEditeContact } from "../../hoc/withEditeContact";

const FriendsContainer = ({ contacts, ...props }) => {
  const filterContacts = () => {
    return contacts.filter((contact) => contact.category === "Friends");
  };

  return <Friends {...props} contacts={filterContacts()} />;
};
export default compose(withEditeContact)(FriendsContainer);
