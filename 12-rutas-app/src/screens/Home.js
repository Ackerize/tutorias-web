import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import firebase from "../firebase/firebase";

const Home = () => {
  const [userName, setUserName] = useState(localStorage.getItem("user"))

  const onSignOut = () => {
    firebase.auth().signOut();
    localStorage.clear();
  };
  return (
    <div>
      <Title>Hola, {userName}</Title>
      <Button type="danger" onClick={onSignOut}>
        Logout
      </Button>
    </div>
  );
};

export default Home;
