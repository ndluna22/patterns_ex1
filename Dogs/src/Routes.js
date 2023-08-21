import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name"></Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
