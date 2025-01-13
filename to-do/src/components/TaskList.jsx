import React from "react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const handleStatusChange = async (task, newCategory) => {
    // Update the task with the new category
    const updatedTask = { ...task, category: newCategory };
    await updateTask(task._id, updatedTask); // Ensure state updates immediately
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {["notStarted", "inProgress", "completed"].map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4 capitalize border-b border-black text-center">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <div
                  key={task._id}
                  className="p-4 bg-gray-100 border border-black rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold">{task.title}</h3>
                  <p>{task.description}</p>
                  <div className="flex space-x-2 mt-4">
                    {category !== "notStarted" && (
                      <button
                        onClick={() => handleStatusChange(task, "notStarted")}
                        className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700"
                      >
                        Not Started
                      </button>
                    )}
                    {category !== "inProgress" && (
                      <button
                        onClick={() => handleStatusChange(task, "inProgress")}
                        className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700"
                      >
                        In Progress
                      </button>
                    )}
                    {category !== "completed" && (
                      <button
                        onClick={() => handleStatusChange(task, "completed")}
                        className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700"
                      >
                        Completed
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
