import React from "react";
import Icon from "../Icon";

const Emoji = () => {
  return (
    <button type="button" className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
      <Icon name="emoji" />
    </button>
  );
};

export default Emoji;
