import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        setTodos((prevTodos) => [...prevTodos, { text:inputValue, completed: false }]);
        setInputValue("");
    }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new todo"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="ml-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default TodoForm;
