import React, { useState, useEffect } from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import { app as firebase } from "../firebase/firebase";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .currentUser.reload()
      .then(() => {
        const user = firebase.auth().currentUser;
        setUserInfo(user);
      });
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Sidebar user={userInfo} />
        <Chat user={userInfo} />
      </div>
    </div>
  );
};

export default Home;
