import React from "react";
import Card from "../Card/Card.";
import StyledCardContent from "../Card/StyledCardContent";
import StyledCardHeader from "../Card/StyledCardHeader";
import Contact from "../Contact/Contact";
import Number from "../Number/Number";
import Name from "../Name/Name";
import Category from "../Category/Category";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Works = ({ contacts, onOpenModal, onDeleteContact, openCreateModal }) => {
  return (
    <>
      <Card>
        <StyledCardHeader>
          Works <AddCircleIcon onClick={openCreateModal} />
        </StyledCardHeader>
        <StyledCardContent>
          {contacts.map(({ surname, number, id, category }) => (
            <Contact
              key={id}
              onOpenModal={onOpenModal}
              currentContact={{ surname, number, id }}
              onDeleteContact={onDeleteContact}
            >
              <Name>{surname}</Name>
              <Number>{number}</Number>
              <Category>{category}</Category>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "70px",
                }}
              ></div>
            </Contact>
          ))}
        </StyledCardContent>
      </Card>
      <div></div>
    </>
  );
};

export default Works;
