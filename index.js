const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// In-memory to-do list
let todoList = [];

// Routes
app.get("/", (req, res) => {
  res.render("index", { todos: todoList });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  if (task) todoList.push(task);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const index = req.body.index;
  todoList.splice(index, 1);
  res.redirect("/");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
