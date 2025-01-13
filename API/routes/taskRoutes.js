console.log("Comming to taskRoutes");
const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try{
    const tasks = await Task.find();
    console.log(tasks)
    res.status(200).json(tasks);
  }catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;
    const newTask = new Task({ title, description, category, priority });
    await newTask.save();
    res.status(201).json({ message: "Task Created successfully", task: newTask });
  } catch(error){
    res.status(400).json({ message: "Error creating task", error }); 
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Task update successfully", task: updatedTask });
  } catch (error) {
    res.status(400).json({ message: "Error updating task", error});
  }
});

router.delete("/delete/:id", async (req, res) => {
  try{
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully"});
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error});
  }
});

module.exports = router;
