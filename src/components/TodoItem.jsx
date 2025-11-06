import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSave = () => {
    if (editText.trim() && editText !== todo.text) {
      editTodo(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSave}
          onKeyPress={(e) => e.key === "Enter" && handleEditSave()}
          className="flex-1 p-1 border-b-2 border-blue-500 focus:outline-none text-lg text-gray-800"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 text-lg cursor-pointer transition duration-150 ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </span>
      )}
      <div className="flex space-x-2">
        <button
          onClick={() => {
            if (isEditing) {
              handleEditSave();
            } else {
              setIsEditing(true);
              setEditText(todo.text);
            }
          }}
          className="p-2 text-xs font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          {isEditing ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => toggleComplete(todo.id)}
          className={`p-2 text-xs font-semibold rounded-lg ${
            todo.completed
              ? "bg-green-200 text-green-700"
              : "bg-yellow-200 text-yellow-700"
          } hover:opacity-80 transition`}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 text-xs font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
