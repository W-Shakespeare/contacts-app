import React, { useState, useEffect } from "react";
import { getContacts } from "../../redux/contacts/contacts.thunks";
import { MiniDrawer2 } from "../../utils/sidebar";
import Content from "../Content/Content";
import StyledApp from "./StyledApp";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener(
      `resize`,
      (event) => {
        document.body.clientWidth >= 500
          ? setIsMobile(false)
          : setIsMobile(true);
      },
      false
    );
  }, []);

  useEffect(() => {
    // dispatch(getContacts());
  }, []);

  return (
    <StyledApp>
      <MiniDrawer2 isMobile={isMobile} />
      {!contacts && <LoadingSpinner />}
      {contacts && <Content />}
    </StyledApp>
  );
};
export default App;
