import React from "react";
import Icon from "../Icon";

const Google = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <Icon name="google" />
        <span className="ml-4">{text}</span>
      </div>
    </button>
  );
};

export default Google;
