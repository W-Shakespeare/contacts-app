import React, { useState } from "react";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";
import {
  deleteSelectedContact,
  updateContact,
  createContact,
} from "../redux/contacts/contacts.thunks";
import { useDispatch, useSelector } from "react-redux";

export const withEditeContact = (Component) => {
  const EditeContact = ({ props }) => {
    const dispatch = useDispatch();
    const [isCreate, setIsCreate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState();
    const contacts = useSelector((state) => state.contacts.contacts);

    const onCreateContact = (objContact) => {
      dispatch(createContact(objContact));
      setIsModalOpen(false);
      setIsCreate(false);
    };

    const openCreateModal = () => {
      setIsCreate(true);
      setIsModalOpen(true);
    };

    const onOpenModal = (selectedContact) => {
      setIsModalOpen(true);
      setSelectedContact(selectedContact);
    };

    const changeDataContact = (changedContact) => {
      dispatch(updateContact(changedContact.id, changedContact));
      setIsModalOpen(false);
    };

    const onDeleteContact = (id) => {
      dispatch(deleteSelectedContact(id));
    };

    const onCloseModal = () => {
      setIsModalOpen(false);
      setIsCreate(false);
    };
    if (contacts) {
      return isModalOpen === true ? (
        <ModalWindow
          selectedCard={selectedContact}
          {...selectedContact}
          changeCardData={changeDataContact}
          isCreate={isCreate}
          onCreateContact={onCreateContact}
          onCloseModal={onCloseModal}
        />
      ) : (
        <Component
          {...props}
          contacts={contacts}
          onOpenModal={onOpenModal}
          onDeleteContact={onDeleteContact}
          openCreateModal={openCreateModal}
          onCreateContact={onCreateContact}
        />
      );
    }
  };
  return EditeContact;
};
