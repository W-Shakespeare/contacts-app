import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { RadioButtonsGroup } from "../Contact/Contact";
import {
  ModalCenter,
  ModalContainer,
  StyledBox,
  StyledModal,
  StyledModalButtons,
} from "./StyledModalWindow";

export const ModalWindow = ({
  selectedCard,
  surname,
  category,
  number,
  changeCardData,
  isCreate,
  onCreateContact,
  onCloseModal,
}) => {
  const [nameInp, setNameInp] = useState(surname);
  const [numberInp, setNumberInp] = useState(number);
  const [categoryInp, setCategoryInp] = useState(category);
  return (
    <ModalContainer>
      <ModalCenter>
        <StyledModal>
          <StyledBox
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              value={nameInp}
              onChange={(e) => setNameInp(e.target.value)}
              id="standard-basic"
              label="Surname"
              variant="standard"
            />
            <TextField
              value={numberInp}
              onChange={(e) => setNumberInp(e.target.value)}
              id="standard-basic"
              label="Number"
              variant="standard"
            />
            <RadioButtonsGroup
              categoryInp={categoryInp}
              setCategoryInp={setCategoryInp}
            />
          </StyledBox>
          <StyledModalButtons>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                isCreate === false
                  ? changeCardData({
                      ...selectedCard,
                      surname: nameInp,
                      number: numberInp,
                      category: categoryInp,
                    })
                  : onCreateContact({
                      id: Date.now(),
                      surname: nameInp,
                      number: numberInp,
                      category: categoryInp,
                    })
              }
            >
              {isCreate === true ? "Create" : "Edite"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onCloseModal()}
            >
              Close
            </Button>
          </StyledModalButtons>
        </StyledModal>
      </ModalCenter>
    </ModalContainer>
  );
};
