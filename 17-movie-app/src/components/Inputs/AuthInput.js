import React from "react";

const AuthInput = ({ type = "text", name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
      placeholder={placeholder}
    />
  );
};

export default AuthInput;
