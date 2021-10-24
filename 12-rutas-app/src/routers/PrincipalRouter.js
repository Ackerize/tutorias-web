import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../screens/Home";

const PrincipalRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default PrincipalRouter;
