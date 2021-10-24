import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
