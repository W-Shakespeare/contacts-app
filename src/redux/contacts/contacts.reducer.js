import * as contacts from "./contacts.types";

const initialState = {
  contacts: [
    {
      id: "6",
      surname: "Langworth",
      number: "401-246-7736",
      category: "Works",
    },
    {
      id: "7",
      surname: "King",
      number: "958-451-6350",
      category: "Works",
    },
    {
      id: "8",
      surname: "Koepp",
      number: "537-875-7811",
      category: "Friends",
    },
    {
      id: "9",
      surname: "Will",
      number: "314-654-2600",
      category: "Friends",
    },
    {
      id: "10",
      surname: "Wisozk",
      number: "570-370-0463",
      category: "Family",
    },
    {
      id: "11",
      surname: "Powlowski",
      number: "567-855-1926",
      category: "Family",
    },
    {
      id: "12",
      surname: "Runte",
      number: "769-660-3612",
      category: "Works",
    },
    {
      id: "13",
      surname: "Becker",
      number: "502-367-8654",
      category: "Works",
    },
    {
      id: "14",
      surname: "Klein",
      number: "887-516-5394",
      category: "Family",
    },
  ],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case contacts.GET_CONTACTS: {
      console.log("ContactsReducer", action);
      return {
        ...state,
        contacts: action.contactsObj,
      };
    }
    default: {
      return state;
    }
  }
};

export default contactsReducer;
