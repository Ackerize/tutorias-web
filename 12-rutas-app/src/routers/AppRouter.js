import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthRouter from "./AuthRouter";
import PrincipalRouter from "./PrincipalRouter";
import firebase from "../firebase/firebase";

const AppRouter = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setIsChecking(false);
    });
  }, []);

  if (isChecking) {
    return <div>Wait...</div>;
  }

  return (
    <Router>
      <Switch>
        {isLogged ? (
          <Route path="/" component={PrincipalRouter} />
        ) : (
          <Route path="/" component={AuthRouter} />
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
