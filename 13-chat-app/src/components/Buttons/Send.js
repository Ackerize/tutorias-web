import React from "react";
import Icon from "../Icon";

const Send = () => {
  return (
    <div className="ml-4">
      <button
        type="submit"
        className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
      >
        <span>Send</span>
        <span className="ml-2">
          <Icon name="send" />
        </span>
      </button>
    </div>
  );
};

export default Send;
