import React from "react";

const MessageSent = ({ message }) => {
    const { text, photoURL, displayName } = message;
    const letter = displayName.charAt(0).toUpperCase();
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white flex-shrink-0">
          {
              photoURL ? (
                  <img src={photoURL} alt="Avatar" className="rounded-full" />
              ) : (
                  <span>{letter}</span>
              )
          }
        </div>
        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
          <div>{ text }</div>
        </div>
      </div>
    </div>
  );
};

export default MessageSent;
