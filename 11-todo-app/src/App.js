import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const prevTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(prevTodos || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container px-5 lg:mx-auto lg:w-3/5 xl:w-2/5">
      <h1 className="text-center my-5 text-3xl">Todo list</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
