import React from "react";

const Input = ({ type = "text", placeholder, label, value, onChange, name }) => {
  return (
    <div className="mt-4">
      <label className="block text-gray-700">{ label }</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
        required
      />
    </div>
  );
};

export default Input;
