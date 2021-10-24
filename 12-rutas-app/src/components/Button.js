import React from "react";
import GoogleIcon from "./GoogleIcon";

const Button = ({ type = "submit", children, onClick }) => {
  switch (type) {
    case "google":
      return (
        <button
          type="button"
          className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        >
          <div className="flex items-center justify-center">
            <GoogleIcon />
            <span className="ml-4">{children}</span>
          </div>
        </button>
      );
    case "danger":
      return (
        <button
          className="py-3 my-6 mx-6 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block"
          onClick={onClick}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type="submit"
          className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6"
        >
          {children}
        </button>
      );
  }
};

export default Button;
