import React from "react";
import Card from "../Card/Card.";
import StyledCardContent from "../Card/StyledCardContent";
import StyledCardHeader from "../Card/StyledCardHeader";
import Contact from "../Contact/Contact";
import Number from "../Number/Number";
import Name from "../Name/Name";
import Category from "../Category/Category";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const AllContacts = ({
  contacts,
  onOpenModal,
  onDeleteContact,
  workColor,
  familyColor,
  friendsColor,
  openCreateModal,
}) => {
  return (
    <>
      <Card>
        <StyledCardHeader>
          AllContacts <AddCircleIcon onClick={openCreateModal} />
        </StyledCardHeader>
        <StyledCardContent>
          {contacts.map(({ surname, number, id, category }) => (
            <Contact
              key={id}
              onOpenModal={onOpenModal}
              currentContact={{ surname, number, id }}
              onDeleteContact={onDeleteContact}
              colorString={
                workColor(category) ||
                familyColor(category) ||
                friendsColor(category)
              }
            >
              <Name>{surname}</Name>
              <Number>{number}</Number>
              <Category>{category}</Category>
            </Contact>
          ))}
        </StyledCardContent>
      </Card>
      <div></div>
    </>
  );
};

export default AllContacts;
