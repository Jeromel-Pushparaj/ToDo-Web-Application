const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  category: { type: String, default: "notStarted" },
  priority: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
