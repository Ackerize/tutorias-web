import React from "react";

const MovieTitle = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <h2 className="font-semibold text-lg text-center w-full">{children}</h2>
      <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
    </div>
  );
};

export default MovieTitle;
