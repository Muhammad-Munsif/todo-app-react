import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {

  return (
    <div className="md:w-6/12  mx-auto mt-6 space-y-3 overflow-auto ">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 p-4 bg-white rounded-lg shadow-md text-break">
          No tasks yet! Add a new item above.
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
