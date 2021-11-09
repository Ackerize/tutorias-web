import React from "react";
import Button from "./Buttons/Button";
import Icon from "./Icon";
import { app as firebase } from "../firebase/firebase";

const Sidebar = ({ user }) => {
  const onSignOut = () => {
    firebase.auth().signOut();
  };

  const { displayName, photoURL } = user;

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <Icon name="logo" />
        </div>
        <div className="ml-2 font-bold text-2xl">ChatApp</div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          {
            photoURL ? (
              <img
            src={photoURL}
            alt="Avatar"
            className="h-full w-full"
          />
            ) : (
              <div className="flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0 h-full w-full text-4xl">
                {
                  displayName[0]
                }
              </div>
            )
          }
        </div>
        <div className="font-semibold mt-2 text-center text-xl">{ displayName}</div>
      </div>
      <div className="flex flex-col mt-8">
        <Button type="danger" onClick={onSignOut}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
