import React from "react";

const MessageReceive = ({ message }) => {
  const { text, photoURL, displayName } = message;
  const letter = displayName.charAt(0).toUpperCase();
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white flex-shrink-0">
          {photoURL ? (
            <img src={photoURL} alt="Avatar" className="rounded-full" />
          ) : (
            <span>{letter}</span>
          )}
        </div>
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageReceive;
