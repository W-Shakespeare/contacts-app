import axiosConfig from "./api.config";

export const getContactsData = () => axiosConfig.get();

export const updateContact = (contactId, contactData) =>
  axiosConfig.put(`/${contactId}`, contactData);

export const deleteContact = (contactId) => axiosConfig.delete(`${contactId}`);

export const createContact = (contactData) => axiosConfig.post("", contactData);
