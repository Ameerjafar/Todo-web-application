'use client';

import axios from 'axios';
import { TodoType } from '@/app/types/TodoType';
import getAllTodo from '@/service/getAllTodo';
import { useState } from 'react';

const UpdateTodo = ({
  todoId,
  setTodos,
  title,
  isCompleted,
  setShowForm, 
}: {
  todoId: number;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  title: string;
  isCompleted: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [updateTitle, setUpdateTitle] = useState<string>(title);
  const [updateIsCompleted, setUpdateIsCompleted] = useState<boolean>(isCompleted);
  console.log("This is the title", title);
  console.log("This is todo Id", todoId);
  const updateHandler = async () => {

    await axios.put(`http://localhost:3000/api/todo`, {
      id: todoId,
      title: updateTitle,
      isCompleted: updateIsCompleted,
      date: new Date().toISOString(),
    });

    const updatedTodos = await getAllTodo();
    setShowForm(false);
    setTodos(updatedTodos);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Update Todo</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
            placeholder="Enter updated title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center mb-6 space-x-3">
          <label className="text-sm font-medium text-gray-700">Completed</label>
          <input
            type="checkbox"
            checked={updateIsCompleted}
            onChange={(e) => setUpdateIsCompleted(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>

        <button
          onClick={updateHandler}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateTodo;
