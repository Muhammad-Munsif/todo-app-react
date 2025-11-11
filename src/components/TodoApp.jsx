import React, { useState } from "react";
import TodoList from "./TodoList";
import { toast } from "react-toastify";
import TodolistItemApp from "./TodolistItemApp";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleTodo = () => {
    if (input.trim() === "") {
//       return;
//     }
// // A few changes in the code 
// const trimmedInput = input.trim();

//     if (trimmedInput === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${trimmedInput}" is already in the list`);
    } else {
      setTodos([...todos, trimmedInput]);
      setInput("");
      setError("");
    }





    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    toast.success("Item added successfully", {
      autoClose: 2000,
    });
    setTodos([...todos, newTodo]);
    setInput("");
  };
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    toast.info("Task updated successfully!", {
      autoClose: 2000,
    });
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Item deleted successfully", {
      autoClose: 2000,
    });
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.warning("button changes", {
      autoClose: 2000,
    });
  };

  return (
    <>
    <div className="min-h-screen p-8">
      <div className="bg-white rounded-xl md:w-6/12 mx-auto py-6 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          To-Do List App
        </h1>

        <div className="flex items-center justify-center gap-2 px-6">
          <input
            type="text"
            value={input}
            placeholder="Write something..."
            className="w-full p-3 border border-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleTodo()}
            required
          />
          <button
            onClick={handleTodo}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 outline-none rounded-lg font-semibold transition duration-150 text-nowrap"
          >
            Add Task
          </button>
        </div>
      </div>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
    <TodolistItemApp/>
    </>
  );
};

export default TodoApp;
