var express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8080;
var Tasks = [];
app.get('/', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/getAllTask", (req, res)=>{
  console.log("All Tasks");
  console.log(Tasks);
  res.send(Tasks);
});

app.post("/createTask", (req, res) => {
  const task = req.body;
  Tasks.push(task);
  console.log(task);
  res.send("Task created successful"); 
});

app.post("/updateAllTask", (req, res) => {
  console.log("Task Updated");
  const tasks = req.body;

  Tasks = tasks;
  res.send("Task Successfully");
})
app.post("/users", (req, res)=>{
  const body = req.body;
  console.log(body);
  res.send("name: " + body.name + "pass: " + body.pass);
});


app.listen(port, () => {
  console.log(`SandBox listening on port ${port}`);
});

