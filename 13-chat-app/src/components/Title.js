import React from "react";

const Title = ({ children }) => {
  return (
    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
      {children}
    </h1>
  );
};

export default Title;
