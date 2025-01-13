import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("notStarted");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, category });
    setTitle("");
    setDescription("");
    setCategory("notStarted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-lg shadow-md mb-6 flex flex-col items-center"
    >
      <div className="flex space-x-4 w-full">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Task Title"
          className="flex-1 p-2 border border-black rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description Input */}
        <input
          type="text"
          placeholder="Task Description"
          className="flex-1 p-2 border border-black rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="p-2 border border-black rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="notStarted">Not Started</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
