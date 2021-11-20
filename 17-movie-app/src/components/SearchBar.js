import React, { useState } from "react";
import SearchIcon from "./SearchIcon";

const SearchBar = ({ onSubmit }) => {

  const [value, setValue] = useState("");

  return (
    <form
      className="relative text-gray-600 w-1/4 mt-8 mx-auto"
      onSubmit={(event) => {
        setValue("");
        onSubmit(event, value);
      }}
    >
      <input
        type="text"
        placeholder="Search"
        className="bg-white h-10 px-5 pr-10 rounded-full text-lg focus:outline-none w-full"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
