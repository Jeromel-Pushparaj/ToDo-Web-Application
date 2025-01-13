import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://to-do-web-application-xfkp.vercel.app/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
  const addTask = async (task) => {
    try {
      const response = await axios.post("https://to-do-web-application-xfkp.vercel.app/api/tasks/create", task);
      setTasks((prevTasks) => [...prevTasks, response.data]); // Use functional update for state
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update a task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`https://to-do-web-application-xfkp.vercel.app/api/tasks/update/${id}`, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? response.data : task))
      );
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://to-do-web-application-xfkp.vercel.app/api/tasks/delete/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

