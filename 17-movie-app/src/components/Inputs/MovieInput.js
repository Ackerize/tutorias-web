import React from "react";

const MovieInput = ({ label, required, placeholder, type = "text", name, value, onChange }) => {
  return (
    <div className="mb-3 space-y-2 w-full text-xs">
      <label className="font-semibold text-gray-600 py-2">
        { label } {required && <abbr title="required" className="text-red-600">*</abbr>}
      </label>
      <input
        placeholder={placeholder}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MovieInput;
