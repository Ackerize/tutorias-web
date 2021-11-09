import React from "react";

const Primary = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
    >
      {text}
    </button>
  );
};

export default Primary;
