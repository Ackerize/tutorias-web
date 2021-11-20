import React from "react";

const Checkbox = ({ label, activeLabel, inactiveLabel, name, value, onChange }) => {
  return (
    <label className="flex items-center relative w-max cursor-pointer select-none mt-6">
      <span className="text-xs font-semibold mr-3">{label}</span>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={value}
        className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none  bg-red-500"
      />
      <span className="absolute font-medium text-xs uppercase right-1 text-white">
        {" "}
        {inactiveLabel}{" "}
      </span>
      <span className="absolute font-medium text-xs uppercase right-8 text-white">
        {" "}
        {activeLabel}{" "}
      </span>
      <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
    </label>
  );
};

export default Checkbox;
