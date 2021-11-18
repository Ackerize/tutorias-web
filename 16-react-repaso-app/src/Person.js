import React from "react";

const Person = ({ elemento }) => {
    const { name } = elemento;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Person;
