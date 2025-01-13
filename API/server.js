const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try{
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected Successfully");
} catch(error){
  console.error("MongoDB Connection error: ", error);
  process.exit(1);
}
};


const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
