import React, { useState } from "react";

const TodolistItemApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === inputField.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${inputField}" is already in the list`);
    } else {
      setTodos([...todos, inputField]);
      setInput("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodolistItemApp;
import React, { useState } from "react";

const TodolistItemApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === inputField.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${inputField}" is already in the list`);
    } else {
      setTodos([...todos, inputField]);
      setInput("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodolistItemApp;
import React, { useState } from "react";

const TodolistItemApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === inputField.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${inputField}" is already in the list`);
    } else {
      setTodos([...todos, inputField]);
      setInput("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodolistItemApp;
import React, { useState } from "react";

const TodolistItemApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === inputField.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${inputField}" is already in the list`);
    } else {
      setTodos([...todos, inputField]);
      setInput("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodolistItemApp;
import React, { useState } from "react";

const TodolistItemApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === inputField.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${inputField}" is already in the list`);
    } else {
      setTodos([...todos, inputField]);
      setInput("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodolistItemApp;
import React, { useState } from "react";

const TodolistItemApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    const inputField = input.trim();

    if (inputField === "") {
      setError("Please enter a valid task");
      return;
    }

    // Check for duplicate (case-insensitive)
    const isDuplicate = todos.some(
      (todo) => todo.toLowerCase() === inputField.toLowerCase()
    );

    if (isDuplicate) {
      setError(`"${inputField}" is already in the list`);
    } else {
      setTodos([...todos, inputField]);
      setInput("");
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 focus:outline-none"
          placeholder="Enter task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <ul className="list-disc pl-6">
        {todos.map((todo, index) => (
          <li key={index} className="text-gray-700">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodolistItemApp;
