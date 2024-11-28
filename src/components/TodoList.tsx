import React, { useState } from "react";
import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

const todoStore = new Store({ todos: [] as string[] });

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const todos = useStore(todoStore, (state) => state.todos);

  const addTodo = () => {
    todoStore.setState((state) => ({ todos: [...state.todos, todo] }));
    setTodo("");
  };

  const removeTodo = (index: number) => {
    todoStore.setState((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Todo List</h2>
      <div className="space-y-2">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Todo
        </button>
        <ul className="space-y-2">
          {todos.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              {item}
              <button
                onClick={() => removeTodo(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
