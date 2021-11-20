import React from "react";

const PrimaryButton = ({ children, onClick, color="bg-red-600" }) => {
  return (
    <button
      className={`flex items-center justify-center ${color} font-semibold text-white p-2 w-32 rounded-full hover:${color} focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
