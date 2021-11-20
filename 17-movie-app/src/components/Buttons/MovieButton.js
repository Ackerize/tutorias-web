import React from "react";

const MovieButton = ({
  children,
  bgColor = "bg-white",
  hoverColor = "bg-gray-100",
  textColor = "text-gray-600",
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={`mb-2 md:mb-0 ${bgColor} px-5 py-2 text-sm shadow-sm font-medium tracking-wider ${textColor} rounded-full hover:shadow-lg hover:${hoverColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default MovieButton;
