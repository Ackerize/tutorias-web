import React from "react";
import Spinner from "../Spinner";

const AuthButton = ({ children, loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full h-12 rounded-lg bg-blue-600  uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4 flex items-center justify-center"
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default AuthButton;
