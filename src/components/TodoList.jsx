import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <div className=" ">
      <div className="overflow-y-scroll h-[60vh] custom-scrollbar-style mx-auto"> 
        {todos.length === 0 ? (
          <div className="md:w-6/12 mx-auto mt-6 p-4">
            <p className="text-center text-gray-500 p-4 bg-white rounded-lg shadow-md text-break w-full">
              No tasks yet! Add a new item above.
            </p>
          </div>
        ) : (
          <div className="md:w-6/12 mx-auto mt-6 space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;