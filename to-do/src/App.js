import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Input from './components/Input.jsx';
import ListItem from './components/ListItem.jsx';
import axios from "axios";


export default function App() {
  
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTask] = useState([]);

  useEffect(() => {
     axios.get("http://localhost:8080/getAllTask")
      .then((response) => {
       console.log(response.data);
       setTask(response.data);
     });
   }, []);

  const handleTaskInput = (str) => {
    setTaskInput(str);
  };

  const addTask = () => {
    if (taskInput !== "") {
      const task = {
        text: taskInput,
        completed: false
      };
      axios.post("http://localhost:8080/createTask", task)
      .then((res) =>{
        console.log(res);
        setTask([...tasks, task]);
        setTaskInput("");
      })
      .catch((err)=>console.log(err));
    }
  };

  const handleDeleteTask = (index) => {
    var updatedTask = tasks.filter((_, i) => i !== index);
    axios.post("http://localhost:8080/updateAllTask", updatedTask)
    .then((res)=>{
      console.log(res);
      setTask(updatedTask);
    })
    .catch((err) => console.log(err));
  };

  const handleStrikthrough = (index) => {
    var updatedTask = tasks.map((ele, i) => {
      if (index === i) {
        const updatedElement = {
          ...ele,
          completed: ele.completed ? false : true,
        };
        return updatedElement;
      } else {
        return ele;
      }
    });
    setTask(updatedTask);
  };
  
  return (
    <div className="App">
      <h1>ToDo Web App</h1>
      <Input
        taskInput={taskInput}
        addTask={addTask}
        handleTaskInput={handleTaskInput}
      />
      <ListItem
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleStrikthrough={handleStrikthrough}
      />
    </div>
  );
}

