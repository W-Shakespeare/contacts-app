import React from "react";
import { Route } from "react-router-dom";
import withSuspense from "./hoc/withSuspense";
import AllContactsContainer from "./components/AllContacts";

const FriendsContainer = React.lazy(() => import("./components/Friends"));
const FamilyContainer = React.lazy(() => import("./components/Family"));
const WorksContainer = React.lazy(() => import("./components/Works"));

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={withSuspense(AllContactsContainer)} />
      <Route exact path="/Friends" render={withSuspense(FriendsContainer)} />
      <Route exact path="/Family" render={withSuspense(FamilyContainer)} />
      <Route exact path="/Works" render={withSuspense(WorksContainer)} />
    </>
  );
};

export default Routes;
