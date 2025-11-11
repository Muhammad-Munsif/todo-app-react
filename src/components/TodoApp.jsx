import React, { useState } from "react";
import TodoList from "./TodoList";
import { toast } from "react-toastify";
import TodolistItemApp from "./TodolistItemApp";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      toast.warning("Please inter a valid task", {
        autoClose: 2000,
        position: "top-right",
      });

      return;
    }

    const duplicateName = todos.some(
      (todo) => todo.text.toLowerCase() === inputField.toLowerCase()
    );

    if (duplicateName) {
      toast.error(`"${inputField}" is already in the list`, {
        position: "top-center",
        autoClose: 2000,
      });
      setInput("");
      return;
    }

    // Create new todo object
    const newTodo = {
      id: Date.now(),
      text: inputField,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");

    toast.success("Item added successfully", { autoClose: 2000 });
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    toast.info("Task updated successfully!", { autoClose: 2000 });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Item deleted successfully", { autoClose: 2000 });
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.warning("Status toggled!", { autoClose: 2000 });
  };

  return (
    <>
      <TodolistItemApp />
      <div className="min-h-screen p-8">
        <div className="bg-white rounded-xl md:w-6/12 mx-auto py-6 shadow-2xl animate__animated animate__fadeInDown">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            To-Do List App
          </h1>

          <div className="flex items-center justify-center gap-2 px-6">
            <input
              type="text"
              value={input}
              placeholder="Write something..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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
    </>
  );
};

export default TodoApp;
