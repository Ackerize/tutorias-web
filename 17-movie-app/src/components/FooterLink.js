import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ label, path, link }) => {
  return (
    <p className="text-right mb-4">
      {label}{" "}
      <Link
        to={path}
        className="text-blue-500 hover:text-blue-700 font-semibold"
      >
        {link}
      </Link>
    </p>
  );
};

export default FooterLink;
