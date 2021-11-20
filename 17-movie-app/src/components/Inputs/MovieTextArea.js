import React from "react";

const MovieTextArea = ({ label, required, name, placeholder, value, onChange }) => {
  return (
    <div className="flex-auto w-full mb-1 text-xs space-y-2">
      <label className="font-semibold text-gray-600 py-2">{ label }</label>
      <textarea
        required={required}
        name={name}
        className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
        placeholder={placeholder}
        spellCheck="false"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default MovieTextArea;
