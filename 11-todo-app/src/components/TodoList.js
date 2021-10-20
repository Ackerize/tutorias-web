import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo, index) => index !== id);
        setTodos(updatedTodos);
    }

    const handleEdit = (id) => {
        const updatedTodos = todos.map((todo, index) => {
            if (index === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

  return (
    <ul className="my-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={{task: todo, index}} onDelete={handleDelete} onEdit={handleEdit}  />
      ))}
    </ul>
  );
};

export default TodoList;
