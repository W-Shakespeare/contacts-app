import * as api from "../../api/contacts";
import * as action from "./contacts.actions";

export const getContacts = () => async (dispatch) => {
  const res = await api.getContactsData();
  console.log("RES_CONTACTS", res);
  dispatch(action.setContacts(res));
};

export const updateContact = (contactId, contactData) => async (dispatch) => {
  const res = await api.updateContact(contactId, contactData);
  console.log("RES_UPDATE_CONTACTS", res);
  dispatch(getContacts());
};

export const createContact = (contactData) => async (dispatch) => {
  const res = await api.createContact(contactData);
  dispatch(getContacts());
};

export const deleteSelectedContact = (contactId) => async (dispatch) => {
  const res = await api.deleteContact(contactId);
  dispatch(getContacts());
};
