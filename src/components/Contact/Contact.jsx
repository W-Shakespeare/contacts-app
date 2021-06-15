import React, { useState } from "react";
import StyledContact from "./StyledContact";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const RadioButtonsGroup = ({ categoryInp, setCategoryInp }) => {
  return (
    <FormControl component="fieldset" style={{ marginTop: 20 }}>
      <FormLabel component="legend">Category</FormLabel>
      <RadioGroup
        style={{ display: "flex", flexDirection: "row" }}
        aria-label="gender"
        name="gender1"
        value={categoryInp}
        onChange={(e) => setCategoryInp(e.target.value)}
      >
        <FormControlLabel value="Friends" control={<Radio />} label="Friends" />
        <FormControlLabel value="Family" control={<Radio />} label="Family" />
        <FormControlLabel value="Works" control={<Radio />} label="Works" />
      </RadioGroup>
    </FormControl>
  );
};

const EditeContact = () => {
  return (
    <div>
      <TextField id="filled-basic" label="name" variant="filled" />
      <TextField id="filled-basic" label="number" variant="filled" />
      <RadioButtonsGroup />
    </div>
  );
};

const Contact = ({
  children,
  onOpenModal,
  currentContact,
  onDeleteContact,
  colorString,
}) => {
  console.log(colorString, "COLOR_STRING");
  return (
    <StyledContact colorString={colorString}>
      {children}
      <EditIcon
        onClick={() => onOpenModal(currentContact)}
        style={{ cursor: "pointer" }}
      />
      <DeleteForeverIcon
        onClick={() => onDeleteContact(currentContact.id)}
        style={{ cursor: "pointer" }}
      />
    </StyledContact>
  );
};
export default Contact;
