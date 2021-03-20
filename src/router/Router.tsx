import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayOut from "../components/templates/DefaultLayOut";
import HeaderOnlyLayOut from "../components/templates/HeaderOnlyLayOut";
import Home from "../pages/Home";
import Users from "../pages/Users";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayOut>
            <Home />
          </DefaultLayOut>
        </Route>
        <Route exact path="/users">
          <HeaderOnlyLayOut>
            <Users />
          </HeaderOnlyLayOut>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
