import * as contacts from "./contacts.types";

export const setContacts = (contactsObj) => ({
  type: contacts.GET_CONTACTS,
  contactsObj,
});
