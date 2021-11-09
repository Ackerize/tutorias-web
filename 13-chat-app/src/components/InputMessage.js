import React, { useState } from "react";
import Button from "./Buttons/Button";

const InputMessage = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      onSend(value);
      setValue("");
    } else {
      alert("No puede enviar mensaje vacío");
    }
  };

  return (
    <form
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
      onSubmit={handleSubmit}
    >
      <div>
        <Button type="attach" />
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="emoji" />
        </div>
      </div>
      <Button type="send" />
    </form>
  );
};

export default InputMessage;
