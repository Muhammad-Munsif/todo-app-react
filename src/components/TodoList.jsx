import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {

  return (
    // 1. THIS is the scrollable container. It MUST have a defined height.
    <div className="overflow-y-scroll 
                  h-[60vh] 
                  custom-scrollbar-style mx-auto"> 
      
      {/* 2. This inner div holds the content (centered, spaced). 
          We removed 'overflow-auto' from here as the parent manages scrolling. */}
      <div className="md:w-6/12 mx-auto mt-6 space-y-3"> 
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
    </div>
  );
};

export default TodoList;