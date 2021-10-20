import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const { task: {text, completed}, index } = todo;
  return (
    <li className="flex row items-center justify-between w-full py-1 px-4 my-1 rounded border bg-gray-100 text-gray-600">
      <div className="column">
        <input
          className="mx-1"
          type="checkbox"
          checked={completed}
          onChange={() => onEdit(index)}
        />
        <span className={completed ? "line-through" : ""}>{text}</span>
      </div>
      <div className="p-2">
        <span
          className="py-2 cursor-pointer"
          onClick={() => onDelete(index)}
        >
          <i className="fas fa-times"></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
