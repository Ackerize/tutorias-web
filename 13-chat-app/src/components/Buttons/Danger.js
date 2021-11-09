import React from "react";

const Danger = ({ onClick, text }) => {
  return (
    <button
      className="py-3 my-6 mx-6 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Danger;
